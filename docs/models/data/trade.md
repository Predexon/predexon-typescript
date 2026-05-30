# Trade

Trade model for Polymarket trades.

## Example Usage

```typescript
import { Trade } from "@predexon/sdk/models/data";

let value: Trade = {
  tokenId: "<id>",
  side: "BUY",
  marketSlug: "<value>",
  conditionId: "<id>",
  shares: 766853,
  sharesNormalized: 2748.47,
  price: 1346.82,
  amountUsd: 29.26,
  txHash: "<value>",
  title: "<value>",
  timestamp: 795521,
  orderHash: "<value>",
  user: "Justice_Lowe",
  taker: "<value>",
  isYesSide: false,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `tokenId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `side`                                                                                    | [data.OrderSide](../../models/data/order-side.md)                                         | :heavy_check_mark:                                                                        | Order side enum.                                                                          |
| `marketSlug`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `conditionId`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `shares`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | Shares (raw blockchain units)                                                             |
| `sharesNormalized`                                                                        | *number*                                                                                  | :heavy_check_mark:                                                                        | Shares normalized (raw / 1000000)                                                         |
| `price`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | Trade price (0-1 range)                                                                   |
| `amountUsd`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Trade value in USD                                                                        |
| `txHash`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `title`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `timestamp`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | Unix timestamp in seconds                                                                 |
| `orderHash`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | Order hash (same order can have multiple fills)                                           |
| `user`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | Maker address                                                                             |
| `taker`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | Taker address (counterparty)                                                              |
| `isYesSide`                                                                               | *boolean*                                                                                 | :heavy_check_mark:                                                                        | True if trade is for YES token, False for NO token                                        |
| `outcomeLabel`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | Human-readable outcome label (e.g., 'Yes', 'No', 'Trump', 'Harris')                       |
| `feeUsd`                                                                                  | *number*                                                                                  | :heavy_minus_sign:                                                                        | Trading fee in USD                                                                        |
| `exchangeVersion`                                                                         | *number*                                                                                  | :heavy_minus_sign:                                                                        | Exchange contract version: 1 = V1 (CTF/NegRiskCTF), 2 = V2                                |
| `builder`                                                                                 | *string*                                                                                  | :heavy_minus_sign:                                                                        | V2 builder attribution tag (bytes32 hex). Empty for V1 fills or V2 fills with no builder. |
| `metadata`                                                                                | *string*                                                                                  | :heavy_minus_sign:                                                                        | V2 opaque metadata tag (bytes32 hex). Empty for V1 fills or V2 fills with no metadata.    |