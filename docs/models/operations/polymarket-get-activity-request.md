# PolymarketGetActivityRequest

## Example Usage

```typescript
import { PolymarketGetActivityRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetActivityRequest = {
  wallet: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `wallet`                                                     | *string*                                                     | :heavy_check_mark:                                           | Wallet address                                               |
| `startTime`                                                  | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for start                           |
| `endTime`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for end                             |
| `marketSlug`                                                 | *string*                                                     | :heavy_minus_sign:                                           | Filter by market slug                                        |
| `conditionId`                                                | *string*                                                     | :heavy_minus_sign:                                           | Filter by condition ID                                       |
| `sortBy`                                                     | [data.ActivitySortBy](../../models/data/activity-sort-by.md) | :heavy_minus_sign:                                           | Sort by: timestamp or type                                   |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Number of activities to return (1-500)                       |
| `order`                                                      | [data.OrderDirection](../../models/data/order-direction.md)  | :heavy_minus_sign:                                           | Sort order: asc or desc                                      |
| `paginationKey`                                              | *string*                                                     | :heavy_minus_sign:                                           | Pagination key for cursor-based pagination                   |