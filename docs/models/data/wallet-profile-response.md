# WalletProfileResponse

Full wallet profile response.

## Example Usage

```typescript
import { WalletProfileResponse } from "@predexon/sdk/models/data";

let value: WalletProfileResponse = {
  user: "Clare.Pouros",
  metrics: {
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
| `user`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Wallet address                                                     |
| `metrics`                                                          | [data.WalletMetrics](../../models/data/wallet-metrics.md)          | :heavy_check_mark:                                                 | All metrics for a wallet across all time windows.                  |
| `tradingStyles`                                                    | [data.TradingStyleFlags](../../models/data/trading-style-flags.md) | :heavy_check_mark:                                                 | Multi-label trading style classification.                          |
| `entryEdge`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Price edge (avg_sell - avg_buy)                                    |
| `unrealizedPnl`                                                    | *number*                                                           | :heavy_minus_sign:                                                 | Total unrealized PnL in USD                                        |
| `totalPnl`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | Total PnL (realized + unrealized - net fees)                       |
| `firstTradeAt`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | Unix timestamp of first trade                                      |
| `lastTradeAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | Unix timestamp of last trade                                       |
| `computedAt`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | Unix timestamp when metrics were computed                          |