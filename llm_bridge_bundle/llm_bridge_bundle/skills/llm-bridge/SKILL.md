# LLM Bridge (Account Global)

Use this skill to call the account-level third-party API model from any Accio Work agent. Current default profile uses the Fox/Codex GPT-5.5 relay.

## Default command

```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py "Your prompt here"
```

Equivalent explicit form:

```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py run "Your prompt here"
```

## Common usage

### Ask the default GPT-5.5 profile
```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py "Analyze this task and return a concise implementation plan."
```

### Read a long prompt from file
```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py run --file prompt.md
```

### Pipe content through stdin
```bash
type prompt.md | python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py run
```

### Use a named profile
```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py run --profile fox-gpt55 "Your prompt"
```

### Return JSON for automation
```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py run --json "Your prompt"
```

## Diagnostics

### Safe status, no secret leakage
```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py status
```

### Test model connectivity
```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py test
```

### List profiles
```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py profiles list
```

## Per-agent model configuration

Create a local override in that agent's `agent-core/llm_bridge_local.json`:

```json
{
  "profile": "fox-gpt55",
  "model": "gpt-5.5"
}
```

You can generate it automatically:

```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py config init-agent --agent C:/Users/Administrator/.accio/accounts/1751297738/agents/AGENT_ID/agent-core --profile fox-gpt55
```

Local override priority: CLI flags > environment variables > `agent-core/llm_bridge_local.json` > named profile > global default.

## Enable this skill in another agent

Install/enable in one agent:

```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py install --agent C:/Users/Administrator/.accio/accounts/1751297738/agents/AGENT_ID/agent-core
```

Install/enable in every agent under this account:

```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py install --all
```

Preview without writing:

```bash
python C:/Users/Administrator/.accio/accounts/1751297738/scripts/llm_bridge.py install --all --dry-run
```

## Configuration files

- Global config: `C:\Users\Administrator\.accio\accounts\1751297738\shared-config\llm_bridge.json`
- Global script: `C:\Users\Administrator\.accio\accounts\1751297738\scripts\llm_bridge.py`
- Skill docs: `C:\Users\Administrator\.accio\accounts\1751297738\skills\llm-bridge\SKILL.md`

## Rules for agents

- Use this bridge by default for code generation, complex reasoning, task planning, SEO strategy, and implementation review.
- Never print API keys or raw config with secrets. Use `status` or `config show`, both redact sensitive fields.
- Prefer `--file` or stdin for large prompts instead of putting long content directly in the command line.
