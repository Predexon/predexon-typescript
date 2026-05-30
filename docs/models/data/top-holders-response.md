# TopHoldersResponse

Response for market top holders endpoint.

## Example Usage

```typescript
import { TopHoldersResponse } from "@predexon/sdk/models/data";

let value: TopHoldersResponse = {
  conditionId: "<id>",
  entries: [
    {
      rank: 616242,
      user: "Donavon_Price",
      tokenId: "<id>",
      positionShares: 1592.5,
      positionValueUsd: 8303.74,
      side: "<value>",
      outcomeIndex: 671781,
      avgPrice: 8582.83,
      realizedPnl: 8755.94,
      unrealizedPnl: 1351.7,
      totalPnl: 4262.08,
      tradeCount: 458407,
    },
  ],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `conditionId`                                                         | *string*                                                              | :heavy_check_mark:                                                    | Market condition ID                                                   |
| `title`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Market title                                                          |
| `marketSlug`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | Market slug                                                           |
| `side`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | Position side filter applied ('yes', 'no', or null for all)           |
| `totalCount`                                                          | *number*                                                              | :heavy_minus_sign:                                                    | Total number of holders matching filters (only if include_count=true) |
| `entries`                                                             | [data.TopHolderEntry](../../models/data/top-holder-entry.md)[]        | :heavy_check_mark:                                                    | Top holder entries                                                    |
| `pagination`                                                          | [data.CursorPagination](../../models/data/cursor-pagination.md)       | :heavy_check_mark:                                                    | Cursor-based pagination for endpoints that don't support offset.      |