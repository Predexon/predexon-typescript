# AccountPositionResponseStatus

`active` — still trading. `resolved` — settled, awaiting redemption window. `redeemable` — call `/redeem` to claim winnings.

## Example Usage

```typescript
import { AccountPositionResponseStatus } from "@predexon/sdk/models/trading";

let value: AccountPositionResponseStatus = "redeemable";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "resolved" | "redeemable" | Unrecognized<string>
```