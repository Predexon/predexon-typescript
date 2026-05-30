# CreateTransferRequestFrom

Source wallet. `deposit` is the account's Base USDC deposit wallet; venue values are the account's venue trading wallets.

## Example Usage

```typescript
import { CreateTransferRequestFrom } from "@predexon/sdk/models/trading";

let value: CreateTransferRequestFrom = "deposit";
```

## Values

```typescript
"deposit" | "polymarket" | "predict" | "opinion" | "limitless"
```