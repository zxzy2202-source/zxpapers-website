param(
    [Parameter(Mandatory = $true)]
    [string]$ApiKey,

    [string]$BaseUrl = "https://code.newcli.com/claude",
    [string]$PrimaryApiKey = "fox",
    [string]$Model = "sonnet"
)

$claudeDir = Join-Path $env:USERPROFILE ".claude"
New-Item -ItemType Directory -Force -Path $claudeDir | Out-Null

$settingsPath = Join-Path $claudeDir "settings.json"
$configPath = Join-Path $claudeDir "config.json"

$settings = @{
    env = @{
        ANTHROPIC_API_KEY = $ApiKey
        ANTHROPIC_AUTH_TOKEN = $ApiKey
        ANTHROPIC_BASE_URL = $BaseUrl
        DISABLE_NON_ESSENTIAL_MODEL_CALLS = "1"
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC = "1"
    }
    permissions = @{
        allow = @()
        deny = @()
    }
    model = $Model
}

$config = @{
    primaryApiKey = $PrimaryApiKey
}

$settings | ConvertTo-Json -Depth 10 | Set-Content -Path $settingsPath -Encoding UTF8
$config | ConvertTo-Json -Depth 10 | Set-Content -Path $configPath -Encoding UTF8

Write-Host "Installed Claude config:"
Write-Host "  $settingsPath"
Write-Host "  $configPath"
