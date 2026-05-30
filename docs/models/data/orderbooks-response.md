# OrderbooksResponse

Orderbooks endpoint response.

## Example Usage

```typescript
import { OrderbooksResponse } from "@predexon/sdk/models/data";

let value: OrderbooksResponse = {
  snapshots: [],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `snapshots`                                                         | [data.OrderbookSnapshot](../../models/data/orderbook-snapshot.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |
| `pagination`                                                        | [data.CursorPagination](../../models/data/cursor-pagination.md)     | :heavy_check_mark:                                                  | Cursor-based pagination for endpoints that don't support offset.    |