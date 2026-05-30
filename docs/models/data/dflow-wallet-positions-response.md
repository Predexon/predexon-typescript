# DflowWalletPositionsResponse

Dflow wallet positions endpoint response.

## Example Usage

```typescript
import { DflowWalletPositionsResponse } from "@predexon/sdk/models/data";

let value: DflowWalletPositionsResponse = {
  wallet: "<value>",
  positions: [],
  summary: {
    totalPositions: 420591,
    openPositions: 674038,
    closedPositions: 64718,
    totalCostBasis: 1915.37,
    totalRealizedPnl: 2185.15,
    totalFeesPaid: 3792.04,
  },
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `wallet`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | Wallet address                                                             |
| `positions`                                                                | [data.DflowPosition](../../models/data/dflow-position.md)[]                | :heavy_check_mark:                                                         | N/A                                                                        |
| `summary`                                                                  | [data.DflowPositionsSummary](../../models/data/dflow-positions-summary.md) | :heavy_check_mark:                                                         | Summary of all dflow positions.                                            |
| `pagination`                                                               | [data.CursorPagination](../../models/data/cursor-pagination.md)            | :heavy_check_mark:                                                         | Cursor-based pagination for endpoints that don't support offset.           |