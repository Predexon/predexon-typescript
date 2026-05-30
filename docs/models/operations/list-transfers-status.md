# ListTransfersStatus

Filter on the partner-facing status enum. `pending` matches in-flight and in-recovery transfers; `failed` matches both fail states.

## Example Usage

```typescript
import { ListTransfersStatus } from "@predexon/sdk/models/operations";

let value: ListTransfersStatus = "pending";
```

## Values

```typescript
"pending" | "completed" | "failed"
```