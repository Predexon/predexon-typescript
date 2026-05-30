# KalshiMarketsResponse

Response for Kalshi markets list endpoint.

## Example Usage

```typescript
import { KalshiMarketsResponse } from "@predexon/sdk/models/data";

let value: KalshiMarketsResponse = {
  markets: [
    {
      ticker: "<value>",
      eventTicker: "<value>",
      title: "<value>",
      status: "<value>",
      outcomes: [],
      event: {
        eventTicker: "<value>",
      },
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `markets`                                                        | [data.KalshiMarket](../../models/data/kalshi-market.md)[]        | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |