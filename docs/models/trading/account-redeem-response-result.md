# AccountRedeemResponseResult

`won` if the outcome resolved in your favor (pays out 1 stablecoin per share); `lost` otherwise.

## Example Usage

```typescript
import { AccountRedeemResponseResult } from "@predexon/sdk/models/trading";

let value: AccountRedeemResponseResult = "won";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"won" | "lost" | Unrecognized<string>
```