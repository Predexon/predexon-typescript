# WalletFilterEntry

Single entry in wallet filter results.

## Example Usage

```typescript
import { WalletFilterEntry } from "@predexon/sdk/models/data";

let value: WalletFilterEntry = {
  rank: 911863,
  user: "Fae_Johnson66",
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
  marketsMatched: 71153,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `rank`                                                            | *number*                                                          | :heavy_check_mark:                                                | Position in results (1-indexed)                                   |
| `user`                                                            | *string*                                                          | :heavy_check_mark:                                                | Wallet address                                                    |
| `metrics`                                                         | [data.WindowMetrics](../../models/data/window-metrics.md)         | :heavy_check_mark:                                                | Metrics for a specific time window.                               |
| `entryEdge`                                                       | *number*                                                          | :heavy_minus_sign:                                                | Combined price edge across specified markets (avg_sell - avg_buy) |
| `marketsMatched`                                                  | *number*                                                          | :heavy_check_mark:                                                | Number of specified markets this wallet traded                    |