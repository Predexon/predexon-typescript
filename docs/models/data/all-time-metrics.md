# AllTimeMetrics

Extended metrics available only for all-time window.

## Example Usage

```typescript
import { AllTimeMetrics } from "@predexon/sdk/models/data";

let value: AllTimeMetrics = {
  realizedPnl: 3256.39,
  volume: 4409.73,
  roi: 4245.34,
  trades: 749821,
  wins: 505113,
  losses: 545800,
  winRate: 9889.44,
  profitFactor: 1138.71,
  positionsClosed: 573231,
  avgHoldTimeSeconds: 4400.5,
  walletAgeDays: 211843,
  totalPositions: 104289,
  activePositions: 54332,
  maxWinStreak: 568964,
  maxLossStreak: 77969,
  bestPositionRealizedPnl: 1292.41,
  worstPositionRealizedPnl: 9604.52,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `realizedPnl`                                                     | *number*                                                          | :heavy_check_mark:                                                | Realized profit/loss in USD (from closed positions)               |
| `totalPnl`                                                        | *number*                                                          | :heavy_minus_sign:                                                | Total PnL in USD (realized + unrealized - net fees)               |
| `volume`                                                          | *number*                                                          | :heavy_check_mark:                                                | Trading volume in USD                                             |
| `roi`                                                             | *number*                                                          | :heavy_check_mark:                                                | Return on investment (decimal, e.g., 0.5 = 50%)                   |
| `trades`                                                          | *number*                                                          | :heavy_check_mark:                                                | Number of trades                                                  |
| `wins`                                                            | *number*                                                          | :heavy_check_mark:                                                | Number of winning positions closed                                |
| `losses`                                                          | *number*                                                          | :heavy_check_mark:                                                | Number of losing positions closed                                 |
| `winRate`                                                         | *number*                                                          | :heavy_check_mark:                                                | Win rate (decimal, e.g., 0.6 = 60%)                               |
| `profitFactor`                                                    | *number*                                                          | :heavy_check_mark:                                                | Profit factor (gross profit / gross loss)                         |
| `positionsClosed`                                                 | *number*                                                          | :heavy_check_mark:                                                | Number of positions closed                                        |
| `avgBuyPrice`                                                     | *number*                                                          | :heavy_minus_sign:                                                | Volume-weighted average buy price (YES-adjusted, 0-1)             |
| `avgSellPrice`                                                    | *number*                                                          | :heavy_minus_sign:                                                | Volume-weighted average sell price (YES-adjusted, 0-1)            |
| `feesPaid`                                                        | *number*                                                          | :heavy_minus_sign:                                                | Taker fees paid in USD                                            |
| `feesRefunded`                                                    | *number*                                                          | :heavy_minus_sign:                                                | DEPRECATED: always 0. Refunds are already netted into fees_paid.  |
| `avgHoldTimeSeconds`                                              | *number*                                                          | :heavy_check_mark:                                                | Average hold time in seconds                                      |
| `walletAgeDays`                                                   | *number*                                                          | :heavy_check_mark:                                                | Days since first trade                                            |
| `totalPositions`                                                  | *number*                                                          | :heavy_check_mark:                                                | Total token positions ever opened (YES and NO counted separately) |
| `activePositions`                                                 | *number*                                                          | :heavy_check_mark:                                                | Number of currently open positions                                |
| `maxWinStreak`                                                    | *number*                                                          | :heavy_check_mark:                                                | Maximum consecutive wins                                          |
| `maxLossStreak`                                                   | *number*                                                          | :heavy_check_mark:                                                | Maximum consecutive losses                                        |
| `bestPositionRealizedPnl`                                         | *number*                                                          | :heavy_check_mark:                                                | Best single position realized PnL in USD                          |
| `worstPositionRealizedPnl`                                        | *number*                                                          | :heavy_check_mark:                                                | Worst single position realized PnL in USD                         |