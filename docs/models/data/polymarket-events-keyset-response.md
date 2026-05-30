# PolymarketEventsKeysetResponse

Response for Polymarket events list endpoint with cursor pagination.

## Example Usage

```typescript
import { PolymarketEventsKeysetResponse } from "@predexon/sdk/models/data";

let value: PolymarketEventsKeysetResponse = {
  events: [],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `events`                                                         | [data.PolymarketEvent](../../models/data/polymarket-event.md)[]  | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |