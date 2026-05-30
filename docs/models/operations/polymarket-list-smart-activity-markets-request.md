# PolymarketListSmartActivityMarketsRequest

## Example Usage

```typescript
import { PolymarketListSmartActivityMarketsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketListSmartActivityMarketsRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `window`                                                                | [data.TimeWindow](../../models/data/time-window.md)                     | :heavy_minus_sign:                                                      | Time window for metrics                                                 |
| `sortBy`                                                                | [data.SmartActivitySortBy](../../models/data/smart-activity-sort-by.md) | :heavy_minus_sign:                                                      | Sort markets by this metric                                             |
| `order`                                                                 | [data.OrderDirection](../../models/data/order-direction.md)             | :heavy_minus_sign:                                                      | Sort order                                                              |
| `minRealizedPnl`                                                        | *number*                                                                | :heavy_minus_sign:                                                      | Minimum global realized PnL to be 'smart' (USD)                         |
| `minTotalPnl`                                                           | *number*                                                                | :heavy_minus_sign:                                                      | Minimum global total PnL to be 'smart' (USD, net of fees)               |
| `minRoi`                                                                | *number*                                                                | :heavy_minus_sign:                                                      | Minimum global ROI to be 'smart' (decimal)                              |
| `minWinRate`                                                            | *number*                                                                | :heavy_minus_sign:                                                      | Minimum global win rate (decimal)                                       |
| `minProfitFactor`                                                       | *number*                                                                | :heavy_minus_sign:                                                      | Minimum global profit factor                                            |
| `minTrades`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | Minimum global trade count                                              |
| `minVolume`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | Minimum global volume (USD)                                             |
| `status`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Filter by market status: open or closed                                 |
| `limit`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Results per page                                                        |
| `paginationKey`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | Cursor for pagination                                                   |