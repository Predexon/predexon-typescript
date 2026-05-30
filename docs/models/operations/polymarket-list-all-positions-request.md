# PolymarketListAllPositionsRequest

## Example Usage

```typescript
import { PolymarketListAllPositionsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketListAllPositionsRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `orderBy`                                                               | [data.AllPositionsOrderBy](../../models/data/all-positions-order-by.md) | :heavy_minus_sign:                                                      | Order by block number or timestamp                                      |
| `order`                                                                 | [data.OrderDirection](../../models/data/order-direction.md)             | :heavy_minus_sign:                                                      | Sort order (desc for latest first, asc for streaming from oldest)       |
| `minBlock`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | Minimum block number (inclusive)                                        |
| `maxBlock`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | Maximum block number (inclusive)                                        |
| `minTimestamp`                                                          | *number*                                                                | :heavy_minus_sign:                                                      | Minimum timestamp in Unix seconds (inclusive)                           |
| `maxTimestamp`                                                          | *number*                                                                | :heavy_minus_sign:                                                      | Maximum timestamp in Unix seconds (inclusive)                           |
| `wallet`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Filter by wallet address                                                |
| `tokenId`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | Filter by token ID                                                      |
| `conditionId`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Filter by market condition ID                                           |
| `limit`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Maximum positions per page (1-500)                                      |
| `paginationKey`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | Cursor for pagination                                                   |