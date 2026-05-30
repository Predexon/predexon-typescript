# WithdrawRequest

## Example Usage

```typescript
import { WithdrawRequest } from "@predexon/sdk/models/trading";

let value: WithdrawRequest = {
  venue: "limitless",
  amount: "965.53",
  destinationAddress: "<value>",
  chain: "polygon",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `venue`                                                                                                                       | [trading.WithdrawRequestVenue](../../models/trading/withdraw-request-venue.md)                                                | :heavy_check_mark:                                                                                                            | Source venue                                                                                                                  |
| `amount`                                                                                                                      | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Amount to withdraw (e.g., "100.00"). Hyperliquid: $10 minimum; $1 USDC fee deducted before delivery.                          |
| `destinationAddress`                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Recipient wallet address (must match chain format)                                                                            |
| `chain`                                                                                                                       | [trading.WithdrawRequestChain](../../models/trading/withdraw-request-chain.md)                                                | :heavy_check_mark:                                                                                                            | Destination chain — `polygon` for Polymarket, `bsc` for Predict and Opinion, `base` for Limitless, `arbitrum` for Hyperliquid |