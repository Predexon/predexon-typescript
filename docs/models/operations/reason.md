# Reason

Why a compute is running: 'miss' (seed never computed), 'stale' (cached >24h old), 'forced' (recompute=true), 'another_pod_computing' (a job for this seed is already running on another pod).

## Example Usage

```typescript
import { Reason } from "@predexon/sdk/models/operations";

let value: Reason = "another_pod_computing";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"miss" | "stale" | "forced" | "another_pod_computing" | Unrecognized<string>
```