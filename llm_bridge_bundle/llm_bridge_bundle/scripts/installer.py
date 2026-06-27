import os
import sys
import shutil
from pathlib import Path

def setup():
    print("="*50)
    print("   📦 LLM BRIDGE 跨环境一键部署助手")
    print("="*50)

    # 1. 确定源文件 (假设在当前运行目录)
    source_dir = Path(__file__).parent
    
    # 2. 自动探测目标 Accio 账号目录
    # 尝试寻找 .accio/accounts 下的第一个数字目录
    home = Path.home()
    accio_base = home / ".accio" / "accounts"
    
    if not accio_base.exists():
        print(f"❌ 未找到 Accio 目录: {accio_base}")
        print("请手动指定目标账号路径。")
        return

    accounts = [d for d in accio_base.iterdir() if d.is_dir() and d.name.isdigit()]
    if not accounts:
        print("❌ 未在 .accio/accounts 下找到有效的账号目录。")
        return

    print("检测到以下 Accio 账号：")
    for i, acc in enumerate(accounts):
        print(f"{i+1}. {acc.name}")
    
    choice = input("\n请选择要安装到的账号序号 (默认 1): ") or "1"
    target_account = accounts[int(choice)-1]
    
    print(f"\n[正在部署到: {target_account}]")

    # 3. 复制文件夹
    folders = ["scripts", "shared-config", "skills/llm-bridge"]
    for folder in folders:
        src = source_dir / folder
        dst = target_account / folder
        if src.exists():
            print(f"-> 正在同步 {folder}...")
            if dst.exists(): shutil.rmtree(dst)
            shutil.copytree(src, dst)
        else:
            print(f"⚠️ 警告: 未找到源文件夹 {folder}")

    # 4. 执行智能体注册
    print("\n[正在为该账号下的所有智能体激活插件...]")
    bridge_script = target_account / "scripts" / "llm_bridge.py"
    if bridge_script.exists():
        os.system(f"{sys.executable} {bridge_script} install --all")
    
    print("\n" + "="*50)
    print("🎉 部署完成！")
    print(f"提示：你现在可以在新环境的 Accio 中使用 'llm-bridge' 技能了。")
    print("="*50)

if __name__ == "__main__":
    setup()
