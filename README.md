# minions-dev-prompts

**Reusable prompt templates, prompt chains, and prompt versioning for agent-tasks**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-dev-prompts/sdk minions-sdk

# Python
pip install minions-dev-prompts

# CLI (global)
npm install -g @minions-dev-prompts/cli
```

---

## CLI

```bash
# Show help
dev-prompts --help
```

---

## Python SDK

```python
from minions_dev_prompts import create_client

client = create_client()
```

---

## Project Structure

```
minions-dev-prompts/
  packages/
    core/           # TypeScript core library (@minions-dev-prompts/sdk on npm)
    python/         # Python SDK (minions-dev-prompts on PyPI)
    cli/            # CLI tool (@minions-dev-prompts/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [dev-prompts.minions.help](https://dev-prompts.minions.help)
- Blog: [dev-prompts.minions.blog](https://dev-prompts.minions.blog)
- App: [dev-prompts.minions.wtf](https://dev-prompts.minions.wtf)

---

## License

[MIT](LICENSE)
