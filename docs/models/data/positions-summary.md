# PositionsSummary

Summary of all positions.

## Example Usage

```typescript
import { PositionsSummary } from "@predexon/sdk/models/data";

let value: PositionsSummary = {
  totalPositions: 982227,
  totalValueUsd: 3306.85,
  totalCostUsd: 3730.08,
  totalUnrealizedPnlUsd: 8309.02,
  totalRealizedPnlUsd: 6095.5,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `totalPositions`                                                   | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `totalValueUsd`                                                    | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `totalCostUsd`                                                     | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `totalUnrealizedPnlUsd`                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `totalRealizedPnlUsd`                                              | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `winRate`                                                          | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `winningPositions`                                                 | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `losingPositions`                                                  | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `feesPaid`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | Total taker fees paid (USD)                                        |
| `feesRefunded`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | DEPRECATED: always 0. Refunds are already netted into fees_paid.   |
| `netFees`                                                          | *number*                                                           | :heavy_minus_sign:                                                 | Net fees paid (same as fees_paid, which is already net of refunds) |