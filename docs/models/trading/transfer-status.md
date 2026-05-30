# TransferStatus

Partner-facing 3-state status. `pending` includes routes still in active recovery; `failed` includes routes that exhausted recovery (see `substatus`).

## Example Usage

```typescript
import { TransferStatus } from "@predexon/sdk/models/trading";

let value: TransferStatus = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "completed" | "failed" | Unrecognized<string>
```