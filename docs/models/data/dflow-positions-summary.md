# DflowPositionsSummary

Summary of all dflow positions.

## Example Usage

```typescript
import { DflowPositionsSummary } from "@predexon/sdk/models/data";

let value: DflowPositionsSummary = {
  totalPositions: 770645,
  openPositions: 305430,
  closedPositions: 252752,
  totalCostBasis: 6154.09,
  totalRealizedPnl: 8410.86,
  totalFeesPaid: 7471.28,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `totalPositions`                      | *number*                              | :heavy_check_mark:                    | Total number of positions             |
| `openPositions`                       | *number*                              | :heavy_check_mark:                    | Number of open positions              |
| `closedPositions`                     | *number*                              | :heavy_check_mark:                    | Number of closed positions            |
| `totalCostBasis`                      | *number*                              | :heavy_check_mark:                    | Total cost basis across all positions |
| `totalRealizedPnl`                    | *number*                              | :heavy_check_mark:                    | Total realized PnL                    |
| `totalFeesPaid`                       | *number*                              | :heavy_check_mark:                    | Total fees paid                       |