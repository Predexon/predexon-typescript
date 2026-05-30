# CohortComparisonResponse

Response for cohort performance comparison.

## Example Usage

```typescript
import { CohortComparisonResponse } from "@predexon/sdk/models/data";

let value: CohortComparisonResponse = {
  window: "30d",
  cohorts: [
    {
      cohortName: "<value>",
      walletCount: 686637,
      totalVolume: 8052.71,
      totalRealizedPnl: 9574.86,
      avgRealizedPnl: 8473.22,
      medianRealizedPnl: 1058.94,
      avgRoi: 2201.89,
      avgWinRate: 4250.84,
      avgProfitFactor: 6615.52,
      avgTrades: 489.75,
      profitableWalletPct: 3541.01,
    },
  ],
  totalWallets: 79723,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `window`                                                | [data.TimeWindow](../../models/data/time-window.md)     | :heavy_check_mark:                                      | Time window for rolling metrics.                        |
| `cohorts`                                               | [data.CohortStats](../../models/data/cohort-stats.md)[] | :heavy_check_mark:                                      | Performance stats per cohort                            |
| `totalWallets`                                          | *number*                                                | :heavy_check_mark:                                      | Total wallets across all cohorts                        |