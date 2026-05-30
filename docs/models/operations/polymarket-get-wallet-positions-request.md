# PolymarketGetWalletPositionsRequest

## Example Usage

```typescript
import { PolymarketGetWalletPositionsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetWalletPositionsRequest = {
  wallet: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `wallet`                                                     | *string*                                                     | :heavy_check_mark:                                           | Wallet address to fetch positions for                        |
| `includeClosed`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | Include zero-balance (closed) positions                      |
| `minShares`                                                  | *number*                                                     | :heavy_minus_sign:                                           | Minimum number of shares to include                          |
| `marketSlug`                                                 | *string*                                                     | :heavy_minus_sign:                                           | Filter by market slug                                        |
| `conditionId`                                                | *string*                                                     | :heavy_minus_sign:                                           | Filter to a specific market by condition ID                  |
| `sortBy`                                                     | [data.PositionSortBy](../../models/data/position-sort-by.md) | :heavy_minus_sign:                                           | Field to sort by                                             |
| `order`                                                      | [data.OrderDirection](../../models/data/order-direction.md)  | :heavy_minus_sign:                                           | Sort order: asc or desc                                      |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Maximum number of positions to return (1-200)                |
| `paginationKey`                                              | *string*                                                     | :heavy_minus_sign:                                           | Cursor for pagination                                        |