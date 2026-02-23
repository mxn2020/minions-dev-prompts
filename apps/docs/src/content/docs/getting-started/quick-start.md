---
title: Quick Start
description: Get up and running with Minions Dev-prompts in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-dev-prompts/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_dev_prompts import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
dev-prompts info
```
