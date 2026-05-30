# PolymarketMarketsResponse

Response for Polymarket markets list endpoint.

## Example Usage

```typescript
import { PolymarketMarketsResponse } from "@predexon/sdk/models/data";

let value: PolymarketMarketsResponse = {
  markets: [],
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