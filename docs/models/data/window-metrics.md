# WindowMetrics

Metrics for a specific time window.

## Example Usage

```typescript
import { WindowMetrics } from "@predexon/sdk/models/data";

let value: WindowMetrics = {
  realizedPnl: 9657.26,
  volume: 9122.24,
  roi: 2059.78,
  trades: 948308,
  wins: 621446,
  losses: 323143,
  winRate: 7989.84,
  profitFactor: 5161.84,
  positionsClosed: 768735,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `realizedPnl`                                                    | *number*                                                         | :heavy_check_mark:                                               | Realized profit/loss in USD (from closed positions)              |
| `totalPnl`                                                       | *number*                                                         | :heavy_minus_sign:                                               | Total PnL in USD (realized + unrealized - net fees)              |
| `volume`                                                         | *number*                                                         | :heavy_check_mark:                                               | Trading volume in USD                                            |
| `roi`                                                            | *number*                                                         | :heavy_check_mark:                                               | Return on investment (decimal, e.g., 0.5 = 50%)                  |
| `trades`                                                         | *number*                                                         | :heavy_check_mark:                                               | Number of trades                                                 |
| `wins`                                                           | *number*                                                         | :heavy_check_mark:                                               | Number of winning positions closed                               |
| `losses`                                                         | *number*                                                         | :heavy_check_mark:                                               | Number of losing positions closed                                |
| `winRate`                                                        | *number*                                                         | :heavy_check_mark:                                               | Win rate (decimal, e.g., 0.6 = 60%)                              |
| `profitFactor`                                                   | *number*                                                         | :heavy_check_mark:                                               | Profit factor (gross profit / gross loss)                        |
| `positionsClosed`                                                | *number*                                                         | :heavy_check_mark:                                               | Number of positions closed                                       |
| `avgBuyPrice`                                                    | *number*                                                         | :heavy_minus_sign:                                               | Volume-weighted average buy price (0-1)                          |
| `avgSellPrice`                                                   | *number*                                                         | :heavy_minus_sign:                                               | Volume-weighted average sell price (0-1)                         |
| `feesPaid`                                                       | *number*                                                         | :heavy_minus_sign:                                               | Taker fees paid in USD                                           |
| `feesRefunded`                                                   | *number*                                                         | :heavy_minus_sign:                                               | DEPRECATED: always 0. Refunds are already netted into fees_paid. |