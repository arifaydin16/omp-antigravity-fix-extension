# Antigravity Fix Extension

Fixes false HTTP 429 `RESOURCE_EXHAUSTED` errors when using Google Antigravity (Cloud Code Assist) models in `oh-my-pi` (`omp`).

## How it works

The official Google Antigravity client (`antigravity/hub`) does not send `requestType: "agent"` in the request envelope. On Cloud Code Assist endpoints (`daily-cloudcode-pa.googleapis.com`), sending `requestType: "agent"` triggers Google's internal instruction-hierarchy filter when prompts contain RFC 2119 directives, resulting in a masked 429 error.

This extension hooks `before_provider_request` to omit `requestType: "agent"` for Antigravity requests, matching the official client contract. **System prompts, conventions, and XML tags remain 100% untouched.**

## Installation

Clone this repository into your OMP extensions directory:

### Windows (CMD)
```cmd
git clone https://github.com/arifaydin16/omp-antigravity-fix-extension "%USERPROFILE%/.omp/agent/extensions/antigravity-fix"
```

### Windows (PowerShell)
```powershell
git clone https://github.com/arifaydin16/omp-antigravity-fix-extension "$HOME/.omp/agent/extensions/antigravity-fix"
```

### Linux / macOS
```bash
git clone https://github.com/arifaydin16/omp-antigravity-fix-extension "$HOME/.omp/agent/extensions/antigravity-fix"
```

> **Note:** Extensions must reside under `~/.omp/agent/extensions` to be auto-discovered.
