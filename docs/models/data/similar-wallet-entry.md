# SimilarWalletEntry

A wallet similar to the target wallet.

## Example Usage

```typescript
import { SimilarWalletEntry } from "@predexon/sdk/models/data";

let value: SimilarWalletEntry = {
  rank: 396744,
  user: "Nickolas.Ankunding",
  marketsOverlap: 513758,
  overlapPct: 5610.44,
  totalMarkets: 179482,
  metrics: {
    realizedPnl: 4261.63,
    volume: 3915.14,
    roi: 1053.76,
    trades: 743095,
    wins: 815433,
    losses: 511234,
    winRate: 6533.35,
    profitFactor: 2787.36,
    positionsClosed: 496297,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `rank`                                                          | *number*                                                        | :heavy_check_mark:                                              | Similarity rank (1 = most similar)                              |
| `user`                                                          | *string*                                                        | :heavy_check_mark:                                              | Wallet address                                                  |
| `marketsOverlap`                                                | *number*                                                        | :heavy_check_mark:                                              | Number of markets traded by both wallets                        |
| `overlapPct`                                                    | *number*                                                        | :heavy_check_mark:                                              | Percentage of target's markets also traded by this wallet (0-1) |
| `totalMarkets`                                                  | *number*                                                        | :heavy_check_mark:                                              | Total markets this wallet has traded                            |
| `metrics`                                                       | [data.WindowMetrics](../../models/data/window-metrics.md)       | :heavy_check_mark:                                              | Metrics for a specific time window.                             |