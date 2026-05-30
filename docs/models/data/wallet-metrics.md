# WalletMetrics

All metrics for a wallet across all time windows.

## Example Usage

```typescript
import { WalletMetrics } from "@predexon/sdk/models/data";

let value: WalletMetrics = {
  oneDay: {
    realizedPnl: 6518.92,
    volume: 1343.14,
    roi: 6716.21,
    trades: 449716,
    wins: 661229,
    losses: 149800,
    winRate: 4896.4,
    profitFactor: 2226.61,
    positionsClosed: 534696,
  },
  sevenDay: {
    realizedPnl: 9140.34,
    volume: 5908.5,
    roi: 1839.06,
    trades: 186589,
    wins: 720296,
    losses: 572515,
    winRate: 5144.24,
    profitFactor: 806.35,
    positionsClosed: 786692,
  },
  thirtyDay: {
    realizedPnl: 8744.12,
    volume: 4043.82,
    roi: 6412.32,
    trades: 600805,
    wins: 667331,
    losses: 781078,
    winRate: 944.99,
    profitFactor: 9198.39,
    positionsClosed: 996546,
  },
  allTime: {
    realizedPnl: 8248.28,
    volume: 2243.02,
    roi: 9611.04,
    trades: 737559,
    wins: 224397,
    losses: 563754,
    winRate: 128.67,
    profitFactor: 4977.62,
    positionsClosed: 877399,
    avgHoldTimeSeconds: 7059.76,
    walletAgeDays: 263479,
    totalPositions: 170054,
    activePositions: 722467,
    maxWinStreak: 928475,
    maxLossStreak: 110108,
    bestPositionRealizedPnl: 2261.47,
    worstPositionRealizedPnl: 5795.28,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `oneDay`                                                     | [data.WindowMetrics](../../models/data/window-metrics.md)    | :heavy_check_mark:                                           | Metrics for a specific time window.                          |
| `sevenDay`                                                   | [data.WindowMetrics](../../models/data/window-metrics.md)    | :heavy_check_mark:                                           | Metrics for a specific time window.                          |
| `thirtyDay`                                                  | [data.WindowMetrics](../../models/data/window-metrics.md)    | :heavy_check_mark:                                           | Metrics for a specific time window.                          |
| `allTime`                                                    | [data.AllTimeMetrics](../../models/data/all-time-metrics.md) | :heavy_check_mark:                                           | Extended metrics available only for all-time window.         |