#!/usr/bin/env python3
import sys
import os
import json
import subprocess
from pathlib import Path

# Paths inherited from your account structure
ACCOUNT_ROOT = Path(r"C:\Users\Administrator\.accio\accounts\1751297738")
BRIDGE_SCRIPT = ACCOUNT_ROOT / "scripts" / "llm_bridge.py"
CONFIG_PATH = ACCOUNT_ROOT / "shared-config" / "llm_bridge.json"

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

def header():
    print("="*50)
    print("   🚀 LLM BRIDGE 中转站管理工具 v1.0")
    print("="*50)

def get_config():
    if not CONFIG_PATH.exists():
        return {}
    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def run_cmd(args):
    try:
        result = subprocess.run([sys.executable, str(BRIDGE_SCRIPT)] + args, 
                               capture_output=True, text=True, encoding='utf-8')
        return result.stdout.strip(), result.stderr.strip()
    except Exception as e:
        return "", str(e)

def test_connection():
    print("\n[正在测试连接...]")
    stdout, stderr = run_cmd(["test"])
    if "ok\": true" in stdout.lower():
        print("✅ 连接成功！")
        print(stdout)
    else:
        print("❌ 连接失败")
        print(stderr or stdout)
    input("\n按回车键返回...")

def list_profiles():
    print("\n[当前可用 Profile]")
    stdout, stderr = run_cmd(["profiles", "list"])
    print(stdout)
    input("\n按回车键返回...")

def switch_profile():
    clear()
    header()
    stdout, stderr = run_cmd(["profiles", "list"])
    try:
        data = json.loads(stdout)
        profiles = data.get("profiles", [])
        current = data.get("default_profile", "unknown")
        
        print(f"当前默认: {current}\n")
        for i, p in enumerate(profiles):
            print(f"{i+1}. {p}")
        
        choice = input("\n请输入数字选择新 Profile (或输入 q 返回): ")
        if choice.lower() == 'q': return
        
        idx = int(choice) - 1
        if 0 <= idx < len(profiles):
            new_p = profiles[idx]
            stdout, stderr = run_cmd(["profiles", "use", new_p])
            print(f"\n✨ {stdout}")
            time.sleep(1.5)
        else:
            print("无效选择")
            time.sleep(1)
    except Exception as e:
        print(f"发生错误: {e}")
        time.sleep(2)

def show_status():
    clear()
    header()
    stdout, stderr = run_cmd(["status", "--show-redacted"])
    print(stdout)
    input("\n按回车键返回...")

def main_menu():
    while True:
        clear()
        header()
        config = get_config()
        current_model = config.get("profiles", {}).get(config.get("default_profile", ""), {}).get("model", "N/A")
        print(f"当前模式: {config.get('default_profile', 'N/A')} ({current_model})")
        print("-" * 50)
        print("1. ⚡ 快速连接测试")
        print("2. 🔄 切换模型 Profile (GPT-5.5 / Claude / etc.)")
        print("3. 📋 查看当前配置状态 (安全脱敏)")
        print("4. 🔍 列出所有可用 Profiles")
        print("5. 🛠️  查看详细 Skill 说明 (SKILL.md)")
        print("q. 退出")
        print("-" * 50)
        
        choice = input("请选择操作: ").lower()
        
        if choice == '1': test_connection()
        elif choice == '2': switch_profile()
        elif choice == '3': show_status()
        elif choice == '4': list_profiles()
        elif choice == '5': 
            print(f"\n说明文档位于: {ACCOUNT_ROOT}\\skills\\llm-bridge\\SKILL.md")
            input("\n按回车键返回...")
        elif choice == 'q': break

if __name__ == "__main__":
    import time
    main_menu()
