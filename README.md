# Antigravity Fix Extension

Normalizes `<system-conventions>` and `<system_conventions>` tags to `<conventions>` in the system prompt before the agent starts via the `before_agent_start` hook.

## Installation

Clone this repository into the extensions directory:

```bash
git clone <REPO_URL> "%USERPROFILE%/.omp/agent/extensions/antigravity-fix"
```

Or using PowerShell:

```powershell
git clone <REPO_URL> "$HOME/.omp/agent/extensions/antigravity-fix"
```

> **Note:** `%USERFOLDER%` corresponds to `%USERPROFILE%` (`C:\Users\<Username>`) on Windows. Extensions must reside under `~/.omp/agent/extensions` to be discovered.
