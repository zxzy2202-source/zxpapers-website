#!/usr/bin/env python3
import argparse
import json
import os
import re
import ssl
import sys
import time
import http.client
from pathlib import Path
from urllib.parse import urlparse

ACCOUNT_ROOT = Path(__file__).resolve().parents[1]
GLOBAL_CONFIG_PATH = ACCOUNT_ROOT / "shared-config" / "llm_bridge.json"
GLOBAL_SKILL_PATH = ACCOUNT_ROOT / "skills" / "llm-bridge"
DEFAULT_PROFILE = "default"

SENSITIVE_KEYS = {"api_key", "auth_token", "authorization", "token", "secret", "password"}
SKILL_ENTRY_ID = "global_llm-bridge"
SKILL_ENTRY = {
    "id": SKILL_ENTRY_ID,
    "name": "llm-bridge",
    "version": "1.1.0",
    "enabled": True,
    "kind": "directory",
    "entryName": "llm-bridge",
    "description": "Account-level global LLM Bridge for cross-agent third-party model access.",
    "installPath": str(GLOBAL_SKILL_PATH),
}


def redact(value):
    if value is None:
        return None
    text = str(value)
    if len(text) <= 10:
        return "***"
    return f"{text[:6]}...{text[-4:]}"


def safe_copy(data):
    if isinstance(data, dict):
        result = {}
        for key, value in data.items():
            if key.lower() in SENSITIVE_KEYS or any(k in key.lower() for k in ("key", "token", "secret", "password")):
                result[key] = redact(value)
            else:
                result[key] = safe_copy(value)
        return result
    if isinstance(data, list):
        return [safe_copy(item) for item in data]
    return data


def load_json(path):
    if not path.exists():
        return {}
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")


def normalize_config(config):
    if "profiles" in config:
        return config

    api_key = config.get("api_key")
    base_url = config.get("base_url", "https://api.openai.com/v1")
    model = config.get("model", "gpt-4o")
    normalized = {
        "version": 1,
        "default_profile": config.get("default_profile", DEFAULT_PROFILE),
        "profiles": {
            DEFAULT_PROFILE: {
                "api_key": api_key,
                "base_url": base_url,
                "model": model,
                "wire_api": config.get("wire_api", "chat_completions"),
                "reasoning_effort": config.get("reasoning_effort", "high"),
                "temperature": config.get("temperature", 0.7),
                "timeout_seconds": config.get("timeout_seconds", 60),
            },
            "fox-gpt55": {
                "api_key": api_key,
                "base_url": "https://dm-fox.rjj.cc/codex/v1",
                "model": "gpt-5.5",
                "wire_api": "chat_completions",
                "reasoning_effort": "high",
                "temperature": 0.7,
                "timeout_seconds": 60,
            },
        },
    }
    return normalized


def find_agent_core(start=None):
    current = Path(start or os.getcwd()).resolve()
    candidates = [current / "agent-core", current]
    for parent in [current, *current.parents]:
        candidates.extend([parent / "agent-core", parent])
    for candidate in candidates:
        if (candidate / "skills" / "skills.jsonc").exists():
            return candidate
        if candidate.name == "agent-core" and candidate.exists():
            return candidate
    return None


def local_config_paths(agent_core=None):
    paths = []
    if agent_core:
        paths.append(Path(agent_core) / "llm_bridge_local.json")
    cwd = Path(os.getcwd()).resolve()
    paths.extend([
        cwd / "llm_bridge_local.json",
        cwd / "agent-core" / "llm_bridge_local.json",
        cwd.parent / "agent-core" / "llm_bridge_local.json",
    ])
    seen = set()
    unique = []
    for path in paths:
        key = str(path).lower()
        if key not in seen:
            seen.add(key)
            unique.append(path)
    return unique


def merge_dict(base, override):
    merged = dict(base)
    for key, value in override.items():
        if value is not None:
            merged[key] = value
    return merged


def resolve_config(profile=None, agent=None, cli_overrides=None):
    raw_global = normalize_config(load_json(GLOBAL_CONFIG_PATH))
    profiles = raw_global.get("profiles", {})
    selected_profile = profile or os.environ.get("LLM_BRIDGE_PROFILE") or raw_global.get("default_profile", DEFAULT_PROFILE)
    if selected_profile not in profiles:
        raise ValueError(f"Profile '{selected_profile}' not found. Available: {', '.join(sorted(profiles)) or '(none)'}")

    resolved = dict(profiles[selected_profile])
    resolved["profile"] = selected_profile
    resolved["config_path"] = str(GLOBAL_CONFIG_PATH)

    agent_core = Path(agent).resolve() if agent else find_agent_core()
    local_path_used = None
    for local_path in local_config_paths(agent_core):
        if local_path.exists():
            local_config = load_json(local_path)
            local_profile = local_config.pop("profile", None)
            if local_profile and local_profile in profiles:
                resolved = dict(profiles[local_profile])
                resolved["profile"] = local_profile
                selected_profile = local_profile
            resolved = merge_dict(resolved, local_config)
            local_path_used = local_path
            break

    env_map = {
        "api_key": "LLM_BRIDGE_API_KEY",
        "base_url": "LLM_BRIDGE_BASE_URL",
        "model": "LLM_BRIDGE_MODEL",
        "wire_api": "LLM_BRIDGE_WIRE_API",
        "reasoning_effort": "LLM_BRIDGE_REASONING_EFFORT",
    }
    for key, env_name in env_map.items():
        if os.environ.get(env_name):
            resolved[key] = os.environ[env_name]

    if cli_overrides:
        resolved = merge_dict(resolved, cli_overrides)

    resolved.setdefault("base_url", "https://api.openai.com/v1")
    resolved.setdefault("model", "gpt-4o")
    resolved.setdefault("wire_api", "chat_completions")
    resolved.setdefault("temperature", 0.7)
    resolved.setdefault("timeout_seconds", 60)
    resolved.setdefault("reasoning_effort", "high")
    resolved["local_config_path"] = str(local_path_used) if local_path_used else None
    resolved["agent_core"] = str(agent_core) if agent_core else None
    return resolved


def build_request(config, prompt, system_prompt):
    base_url = config["base_url"].rstrip("/")
    if "newcli.com" in base_url and "/v1" not in base_url:
        base_url = f"{base_url}/v1"

    parsed = urlparse(base_url)
    path = parsed.path or "/"
    wire_api = config.get("wire_api", "chat_completions")
    model = config["model"]
    api_key = config.get("api_key")

    headers = {
        "Content-Type": "application/json",
        "User-Agent": "Accio-LLM-Bridge/1.1",
        "Connection": "close",
    }

    if wire_api in {"anthropic_messages", "messages"} or path.endswith("/messages"):
        if not path.endswith("/messages"):
            path = f"{path.rstrip('/')}/messages"
        headers["x-api-key"] = api_key
        headers["anthropic-version"] = config.get("anthropic_version", "2023-06-01")
        payload = {
            "model": model,
            "max_tokens": int(config.get("max_tokens", 4096)),
            "messages": [{"role": "user", "content": prompt}],
            "system": system_prompt,
            "temperature": float(config.get("temperature", 0.7)),
        }
        parser = lambda data: data["content"][0]["text"]
    else:
        if not path.endswith("/chat/completions"):
            path = f"{path.rstrip('/')}/chat/completions"
        headers["Authorization"] = f"Bearer {api_key}"
        payload = {
            "model": model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt},
            ],
            "temperature": float(config.get("temperature", 0.7)),
        }
        if config.get("reasoning_effort") and "gpt" in model.lower():
            payload["reasoning_effort"] = config["reasoning_effort"]
        parser = lambda data: data["choices"][0]["message"]["content"]

    return parsed.netloc, path, headers, payload, parser


def call_llm(prompt, system_prompt="You are a helpful assistant.", profile=None, agent=None, model=None, temperature=None):
    overrides = {}
    if model:
        overrides["model"] = model
    if temperature is not None:
        overrides["temperature"] = temperature
    config = resolve_config(profile=profile, agent=agent, cli_overrides=overrides)
    if not config.get("api_key") or config.get("api_key") == "YOUR_API_KEY_HERE":
        raise RuntimeError("API key not configured.")

    netloc, path, headers, payload, parser = build_request(config, prompt, system_prompt)
    ctx = ssl.create_default_context()
    if config.get("verify_ssl", False) is False:
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE

    started = time.time()
    conn = http.client.HTTPSConnection(netloc, context=ctx, timeout=int(config.get("timeout_seconds", 60)))
    try:
        conn.request("POST", path, body=json.dumps(payload).encode("utf-8"), headers=headers)
        response = conn.getresponse()
        raw = response.read().decode("utf-8")
    finally:
        conn.close()

    latency_ms = int((time.time() - started) * 1000)
    if response.status >= 400:
        try:
            error = json.loads(raw)
            message = error.get("error", {}).get("message", raw)
        except Exception:
            message = raw
        raise RuntimeError(f"API Error ({response.status}): {message}")

    data = json.loads(raw)
    return parser(data), {"model": config["model"], "profile": config["profile"], "latency_ms": latency_ms}


def read_prompt(args):
    parts = []
    if getattr(args, "file", None):
        parts.append(Path(args.file).read_text(encoding="utf-8"))
    if getattr(args, "prompt", None):
        parts.append(args.prompt)
    if not parts and not sys.stdin.isatty():
        parts.append(sys.stdin.read())
    prompt = "\n\n".join(part for part in parts if part)
    if not prompt.strip():
        raise ValueError("Prompt is empty. Provide text, --file, or stdin.")
    return prompt


def cmd_run(args):
    text, meta = call_llm(
        read_prompt(args),
        system_prompt=args.system,
        profile=args.profile,
        agent=args.agent,
        model=args.model,
        temperature=args.temp,
    )
    if args.json:
        print(json.dumps({"text": text, "meta": meta}, ensure_ascii=False, indent=2))
    else:
        print(text)


def cmd_status(args):
    config = resolve_config(profile=args.profile, agent=args.agent)
    status = {
        "ok": True,
        "account_root": str(ACCOUNT_ROOT),
        "global_config": str(GLOBAL_CONFIG_PATH),
        "local_config": config.get("local_config_path"),
        "agent_core": config.get("agent_core"),
        "profile": config.get("profile"),
        "base_url": config.get("base_url"),
        "model": config.get("model"),
        "wire_api": config.get("wire_api"),
        "api_key_present": bool(config.get("api_key")),
        "api_key": redact(config.get("api_key")) if args.show_redacted else "[redacted]",
    }
    print(json.dumps(status, ensure_ascii=False, indent=2))


def cmd_profiles(args):
    config = normalize_config(load_json(GLOBAL_CONFIG_PATH))
    profiles = config.get("profiles", {})
    if args.profiles_cmd == "list":
        print(json.dumps({"default_profile": config.get("default_profile"), "profiles": sorted(profiles)}, ensure_ascii=False, indent=2))
    elif args.profiles_cmd == "show":
        if args.name not in profiles:
            raise ValueError(f"Profile '{args.name}' not found")
        print(json.dumps(safe_copy(profiles[args.name]), ensure_ascii=False, indent=2))
    elif args.profiles_cmd == "use":
        if args.name not in profiles:
            raise ValueError(f"Profile '{args.name}' not found")
        config["default_profile"] = args.name
        write_json(GLOBAL_CONFIG_PATH, config)
        print(f"Default profile set to {args.name}")


def cmd_config(args):
    config = normalize_config(load_json(GLOBAL_CONFIG_PATH))
    if args.config_cmd == "migrate":
        write_json(GLOBAL_CONFIG_PATH, config)
        print(f"Migrated config: {GLOBAL_CONFIG_PATH}")
    elif args.config_cmd == "show":
        print(json.dumps(safe_copy(config), ensure_ascii=False, indent=2))
    elif args.config_cmd == "init-agent":
        agent_core = Path(args.agent).resolve() if args.agent else find_agent_core()
        if not agent_core:
            raise ValueError("Cannot locate agent-core. Pass --agent <agent-core-path>.")
        profile = args.profile or config.get("default_profile", DEFAULT_PROFILE)
        data = {"profile": profile}
        if args.model:
            data["model"] = args.model
        if args.base_url:
            data["base_url"] = args.base_url
        target = agent_core / "llm_bridge_local.json"
        write_json(target, data)
        print(f"Created per-agent config: {target}")


def strip_json_comments(text):
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
    text = re.sub(r"(^|\s)//.*$", "", text, flags=re.M)
    return text


def install_agent(agent_core, disable=False, dry_run=False):
    skills_file = Path(agent_core).resolve() / "skills" / "skills.jsonc"
    if not skills_file.exists():
        return {"agent_core": str(agent_core), "ok": False, "error": f"skills.jsonc not found: {skills_file}"}

    raw = skills_file.read_text(encoding="utf-8")
    data = json.loads(strip_json_comments(raw))
    skills = data.setdefault("skills", [])
    existing_index = next((i for i, item in enumerate(skills) if item.get("id") == SKILL_ENTRY_ID or item.get("name") == "llm-bridge"), None)
    entry = {**SKILL_ENTRY, "enabled": not disable}
    if existing_index is None:
        skills.append(entry)
        action = "added"
    else:
        skills[existing_index] = {**skills[existing_index], **entry}
        action = "updated"
    if not dry_run:
        write_json(skills_file, data)
    return {"agent_core": str(agent_core), "ok": True, "action": action, "enabled": not disable, "skills_file": str(skills_file)}


def cmd_install(args):
    if args.all:
        agent_cores = sorted(ACCOUNT_ROOT.glob("agents/*/agent-core"))
        results = [install_agent(agent_core, disable=args.disable, dry_run=args.dry_run) for agent_core in agent_cores]
        print(json.dumps(results, ensure_ascii=False, indent=2))
        return

    agent_core = Path(args.agent).resolve() if args.agent else find_agent_core()
    if not agent_core:
        raise ValueError("Cannot locate agent-core. Pass --agent <agent-core-path> or --all.")
    result = install_agent(agent_core, disable=args.disable, dry_run=args.dry_run)
    if not result["ok"]:
        raise FileNotFoundError(result["error"])
    print(json.dumps(result, ensure_ascii=False, indent=2))


def cmd_test(args):
    text, meta = call_llm(
        "Connection test. Reply with exactly: LLM Bridge OK",
        system_prompt="You are a connectivity test endpoint. Keep the reply short.",
        profile=args.profile,
        agent=args.agent,
        model=args.model,
        temperature=0,
    )
    print(json.dumps({"ok": True, "reply": text.strip(), "meta": meta}, ensure_ascii=False, indent=2))


def cmd_menu(args):
    # This is designed to be called by the Agent to show a UI card
    raw_global = normalize_config(load_json(GLOBAL_CONFIG_PATH))
    profiles = raw_global.get("profiles", {})
    current = raw_global.get("default_profile", DEFAULT_PROFILE)
    
    # Return a structured representation for the agent to use in ask_user
    options = []
    for name, p in profiles.items():
        is_current = " (当前)" if name == current else ""
        options.append({
            "label": f"使用 {name}{is_current}",
            "description": f"模型: {p.get('model')} | 接口: {p.get('base_url')[:30]}..."
        })
    
    ui_data = {
        "question": "请选择你想要使用的模型插件配置：",
        "header": "模型切换",
        "options": options,
        "profiles": list(profiles.keys())
    }
    print(json.dumps(ui_data, ensure_ascii=False, indent=2))

def build_parser():
    parser = argparse.ArgumentParser(description="Account-level LLM Bridge CLI")
    sub = parser.add_subparsers(dest="command")

    menu = sub.add_parser("menu", help="Output data for Accio UI menu")
    menu.set_defaults(func=cmd_menu)

    run = sub.add_parser("run", help="Send a prompt to the configured model")

    run.add_argument("prompt", nargs="?", help="Prompt text. Reads stdin if omitted.")
    run.add_argument("--system", default="You are a helpful assistant.")
    run.add_argument("--profile")
    run.add_argument("--agent", help="Agent core path for local override resolution")
    run.add_argument("--model")
    run.add_argument("--file")
    run.add_argument("--temp", type=float, default=None)
    run.add_argument("--json", action="store_true")
    run.set_defaults(func=cmd_run)

    status = sub.add_parser("status", help="Print safe resolved configuration")
    status.add_argument("--profile")
    status.add_argument("--agent")
    status.add_argument("--show-redacted", action="store_true")
    status.set_defaults(func=cmd_status)

    test = sub.add_parser("test", help="Call the model with a tiny test prompt")
    test.add_argument("--profile")
    test.add_argument("--agent")
    test.add_argument("--model")
    test.set_defaults(func=cmd_test)

    profiles = sub.add_parser("profiles", help="Manage named profiles")
    profiles_sub = profiles.add_subparsers(dest="profiles_cmd", required=True)
    profiles_sub.add_parser("list").set_defaults(func=cmd_profiles)
    show = profiles_sub.add_parser("show")
    show.add_argument("name")
    show.set_defaults(func=cmd_profiles)
    use = profiles_sub.add_parser("use")
    use.add_argument("name")
    use.set_defaults(func=cmd_profiles)

    config = sub.add_parser("config", help="Manage bridge config")
    config_sub = config.add_subparsers(dest="config_cmd", required=True)
    config_sub.add_parser("migrate").set_defaults(func=cmd_config)
    config_sub.add_parser("show").set_defaults(func=cmd_config)
    init_agent = config_sub.add_parser("init-agent")
    init_agent.add_argument("--agent")
    init_agent.add_argument("--profile")
    init_agent.add_argument("--model")
    init_agent.add_argument("--base-url")
    init_agent.set_defaults(func=cmd_config)

    install = sub.add_parser("install", help="Install/enable skill in one or all agents")
    install.add_argument("--agent", help="Path to target agent-core directory")
    install.add_argument("--all", action="store_true", help="Install/enable in every agent under this account")
    install.add_argument("--disable", action="store_true")
    install.add_argument("--dry-run", action="store_true")
    install.set_defaults(func=cmd_install)

    return parser


def main():
    parser = build_parser()
    if len(sys.argv) > 1 and sys.argv[1] not in {"run", "status", "test", "profiles", "config", "install", "menu", "-h", "--help"}:
        sys.argv.insert(1, "run")
    args = parser.parse_args()
    if not hasattr(args, "func"):
        parser.print_help()
        return 1
    try:
        args.func(args)
        return 0
    except Exception as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
