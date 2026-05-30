# PolymarketEventsResponse

Response for Polymarket events list endpoint.

## Example Usage

```typescript
import { PolymarketEventsResponse } from "@predexon/sdk/models/data";

let value: PolymarketEventsResponse = {
  events: [],
  pagination: {
    limit: 883775,
    offset: 721952,
    total: 373436,
    hasMore: true,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `events`                                                        | [data.PolymarketEvent](../../models/data/polymarket-event.md)[] | :heavy_check_mark:                                              | N/A                                                             |
| `pagination`                                                    | [data.OffsetPagination](../../models/data/offset-pagination.md) | :heavy_check_mark:                                              | Offset-based pagination for markets list endpoints.             |