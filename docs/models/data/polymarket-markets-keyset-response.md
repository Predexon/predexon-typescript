# PolymarketMarketsKeysetResponse

Response for Polymarket markets list endpoint with cursor pagination.

## Example Usage

```typescript
import { PolymarketMarketsKeysetResponse } from "@predexon/sdk/models/data";

let value: PolymarketMarketsKeysetResponse = {
  markets: [
    {
      conditionId: "<id>",
      marketId: "<id>",
      marketSlug: "<value>",
      title: "<value>",
      status: "<value>",
      outcomes: [],
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

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `markets`                                                         | [data.PolymarketMarket](../../models/data/polymarket-market.md)[] | :heavy_check_mark:                                                | N/A                                                               |
| `pagination`                                                      | [data.CursorPagination](../../models/data/cursor-pagination.md)   | :heavy_check_mark:                                                | Cursor-based pagination for endpoints that don't support offset.  |