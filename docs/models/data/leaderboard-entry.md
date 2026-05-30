# LeaderboardEntry

Single entry in the leaderboard.

## Example Usage

```typescript
import { LeaderboardEntry } from "@predexon/sdk/models/data";

let value: LeaderboardEntry = {
  rank: 752947,
  user: "Mireya26",
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
  tradingStyles: {
    isWhale: false,
    isMarketMaker: true,
    isActiveTrader: false,
    isBuyAndHold: true,
    isDegen: true,
    isHighConviction: false,
    isContrarian: false,
    isValueHunter: false,
    primaryStyle: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `rank`                                                             | *number*                                                           | :heavy_check_mark:                                                 | Position in leaderboard (1-indexed)                                |
| `user`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Wallet address                                                     |
| `metrics`                                                          | [data.WindowMetrics](../../models/data/window-metrics.md)          | :heavy_check_mark:                                                 | Metrics for a specific time window.                                |
| `tradingStyles`                                                    | [data.TradingStyleFlags](../../models/data/trading-style-flags.md) | :heavy_check_mark:                                                 | Multi-label trading style classification.                          |
| `entryEdge`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Price edge (avg_sell - avg_buy), only for all_time                 |
| `firstTradeAt`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | Unix timestamp of first trade                                      |