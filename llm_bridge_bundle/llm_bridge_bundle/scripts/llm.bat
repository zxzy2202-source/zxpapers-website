@echo off
if "%1"=="" (
    python "C:\Users\Administrator\.accio\accounts\1751297738\scripts\bridge_manager.py"
) else (
    python "C:\Users\Administrator\.accio\accounts\1751297738\scripts\llm_bridge.py" %*
)
