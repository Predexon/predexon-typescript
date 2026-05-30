# Substatus

Optional context. `recoveryInProgress` — a transient on-chain step is being retried (poll until terminal). `escalated` — automated recovery exhausted; contact support. `legacyPartial` — historical pre-recovery-worker rows only.

## Example Usage

```typescript
import { Substatus } from "@predexon/sdk/models/trading";

let value: Substatus = "escalated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"recoveryInProgress" | "escalated" | "legacyPartial" | Unrecognized<string>
```