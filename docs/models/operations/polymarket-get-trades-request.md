# PolymarketGetTradesRequest

## Example Usage

```typescript
import { PolymarketGetTradesRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetTradesRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `marketSlug`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | Filter by market slug                                                 |
| `conditionId`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Filter by condition ID                                                |
| `tokenId`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | Filter by token ID                                                    |
| `startTime`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Unix timestamp (seconds) for start                                    |
| `endTime`                                                             | *number*                                                              | :heavy_minus_sign:                                                    | Unix timestamp (seconds) for end                                      |
| `minTotal`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | Minimum trade amount in USD                                           |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Number of trades to return                                            |
| `wallet`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | Filter by wallet address                                              |
| `builder`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | Filter by V2 builder attribution tag (bytes32 hex, 0x + 64 hex chars) |
| `order`                                                               | [data.OrderDirection](../../models/data/order-direction.md)           | :heavy_minus_sign:                                                    | Sort order: asc or desc                                               |
| `paginationKey`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | Cursor for pagination                                                 |