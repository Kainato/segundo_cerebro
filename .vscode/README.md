# VS Code Workspace Settings

## ⚠️ Security Warning

**Never commit terminal auto-approve configurations to this workspace settings file.**

Terminal auto-approval is a security-sensitive feature. Enabling it in workspace settings reduces the security barrier for all contributors who clone this repository on shared machines.

## Recommended Settings Organization

### Workspace Settings (`.vscode/settings.json`)

- ✅ Code formatting rules
- ✅ Editor preferences (font size, line height, etc.)
- ✅ Language-specific settings
- ✅ Project-specific rules

### User Settings (Local - NOT committed)

- ✅ Terminal auto-approve configurations
- ✅ Personal keybindings
- ✅ Theme preferences
- ✅ Extensions configurations
- ✅ Any machine-specific or security-sensitive settings

**User settings location:** `~/.config/Code/User/settings.json` (Linux/Mac) or `%APPDATA%\Code\User\settings.json` (Windows)

## Example: Terminal Auto-Approve

To add a trusted command to your personal auto-approve list, add this to your **user settings only**:

```json
{
  "chat.tools.terminal.autoApprove": {
    "/your-regex-pattern-here/": {
      "approve": true,
      "matchCommandLine": true
    }
  }
}
```

This setting stays on your local machine and is never shared with the team.
