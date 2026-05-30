# TopHolderEntry

Single entry in the top holders list.

## Example Usage

```typescript
import { TopHolderEntry } from "@predexon/sdk/models/data";

let value: TopHolderEntry = {
  rank: 106451,
  user: "Keely_Rowe79",
  tokenId: "<id>",
  positionShares: 4158.21,
  positionValueUsd: 2222.42,
  side: "<value>",
  outcomeIndex: 71285,
  avgPrice: 2590.78,
  realizedPnl: 8366.56,
  unrealizedPnl: 7019.79,
  totalPnl: 1177.59,
  tradeCount: 228098,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `rank`                                                          | *number*                                                        | :heavy_check_mark:                                              | Position in list (1-indexed)                                    |
| `user`                                                          | *string*                                                        | :heavy_check_mark:                                              | Wallet address                                                  |
| `tokenId`                                                       | *string*                                                        | :heavy_check_mark:                                              | Token ID for this position                                      |
| `positionShares`                                                | *number*                                                        | :heavy_check_mark:                                              | Total shares held (normalized)                                  |
| `positionValueUsd`                                              | *number*                                                        | :heavy_check_mark:                                              | Estimated position value in USD                                 |
| `side`                                                          | *string*                                                        | :heavy_check_mark:                                              | Position side (Yes/No or custom label)                          |
| `outcomeIndex`                                                  | *number*                                                        | :heavy_check_mark:                                              | Outcome index: 0 for Yes/first outcome, 1 for No/second outcome |
| `avgPrice`                                                      | *number*                                                        | :heavy_check_mark:                                              | Average entry price (0-1)                                       |
| `realizedPnl`                                                   | *number*                                                        | :heavy_check_mark:                                              | Realized PnL in USD                                             |
| `unrealizedPnl`                                                 | *number*                                                        | :heavy_check_mark:                                              | Unrealized PnL in USD                                           |
| `totalPnl`                                                      | *number*                                                        | :heavy_check_mark:                                              | Total PnL in USD (realized + unrealized)                        |
| `tradeCount`                                                    | *number*                                                        | :heavy_check_mark:                                              | Number of trades                                                |
| `firstTradeAt`                                                  | *number*                                                        | :heavy_minus_sign:                                              | Unix timestamp of first trade                                   |
| `lastTradeAt`                                                   | *number*                                                        | :heavy_minus_sign:                                              | Unix timestamp of last trade                                    |