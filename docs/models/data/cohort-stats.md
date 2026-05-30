# CohortStats

Performance statistics for a cohort of wallets.

## Example Usage

```typescript
import { CohortStats } from "@predexon/sdk/models/data";

let value: CohortStats = {
  cohortName: "<value>",
  walletCount: 110897,
  totalVolume: 7632.77,
  totalRealizedPnl: 9161.25,
  avgRealizedPnl: 7177.66,
  medianRealizedPnl: 3012.03,
  avgRoi: 2020.09,
  avgWinRate: 3171.24,
  avgProfitFactor: 7195.48,
  avgTrades: 3628.1,
  profitableWalletPct: 3910.48,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `cohortName`                                                     | *string*                                                         | :heavy_check_mark:                                               | Name of the cohort (e.g., trading style)                         |
| `walletCount`                                                    | *number*                                                         | :heavy_check_mark:                                               | Number of wallets in this cohort                                 |
| `totalVolume`                                                    | *number*                                                         | :heavy_check_mark:                                               | Total volume from this cohort (USD)                              |
| `totalRealizedPnl`                                               | *number*                                                         | :heavy_check_mark:                                               | Total realized PnL from this cohort (USD)                        |
| `avgRealizedPnl`                                                 | *number*                                                         | :heavy_check_mark:                                               | Average realized PnL per wallet (USD)                            |
| `medianRealizedPnl`                                              | *number*                                                         | :heavy_check_mark:                                               | Median realized PnL (USD) - approximated                         |
| `avgRoi`                                                         | *number*                                                         | :heavy_check_mark:                                               | Average ROI                                                      |
| `avgWinRate`                                                     | *number*                                                         | :heavy_check_mark:                                               | Average win rate                                                 |
| `avgProfitFactor`                                                | *number*                                                         | :heavy_check_mark:                                               | Average profit factor                                            |
| `avgTrades`                                                      | *number*                                                         | :heavy_check_mark:                                               | Average number of trades                                         |
| `profitableWalletPct`                                            | *number*                                                         | :heavy_check_mark:                                               | Percentage of wallets with positive PnL (0-1)                    |
| `totalFeesPaid`                                                  | *number*                                                         | :heavy_minus_sign:                                               | Total taker fees paid by this cohort (USD)                       |
| `totalFeesRefunded`                                              | *number*                                                         | :heavy_minus_sign:                                               | DEPRECATED: always 0. Refunds are already netted into fees_paid. |
| `avgFeesPaid`                                                    | *number*                                                         | :heavy_minus_sign:                                               | Average taker fees paid per wallet (USD)                         |
| `avgFeesRefunded`                                                | *number*                                                         | :heavy_minus_sign:                                               | DEPRECATED: always 0. Refunds are already netted into fees_paid. |