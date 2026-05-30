# PolymarketMarketsResponse

Response for Polymarket markets list endpoint.

## Example Usage

```typescript
import { PolymarketMarketsResponse } from "@predexon/sdk/models/data";

let value: PolymarketMarketsResponse = {
  markets: [],
  pagination: {
    limit: 883775,
    offset: 721952,
    total: 373436,
    hasMore: true,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `markets`                                                         | [data.PolymarketMarket](../../models/data/polymarket-market.md)[] | :heavy_check_mark:                                                | N/A                                                               |
| `pagination`                                                      | [data.OffsetPagination](../../models/data/offset-pagination.md)   | :heavy_check_mark:                                                | Offset-based pagination for markets list endpoints.               |