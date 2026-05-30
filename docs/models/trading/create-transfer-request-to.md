# CreateTransferRequestTo

Destination wallet. `external` is a partner-supplied address — see `destination`.

## Example Usage

```typescript
import { CreateTransferRequestTo } from "@predexon/sdk/models/trading";

let value: CreateTransferRequestTo = "polymarket";
```

## Values

```typescript
"deposit" | "polymarket" | "predict" | "opinion" | "limitless" | "external"
```