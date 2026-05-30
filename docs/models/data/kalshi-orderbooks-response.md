# KalshiOrderbooksResponse

Kalshi orderbooks endpoint response.

## Example Usage

```typescript
import { KalshiOrderbooksResponse } from "@predexon/sdk/models/data";

let value: KalshiOrderbooksResponse = {
  snapshots: [
    {
      ticker: "<value>",
      timestamp: 581908,
      yesBids: [
        {
          price: 141325,
          size: 314573,
        },
      ],
      yesAsks: [
        {
          price: 555432,
          size: 926419,
        },
      ],
      bestBid: 227447,
      bestAsk: 245778,
      bidDepth: 232575,
      askDepth: 535207,
      sequence: 527410,
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `snapshots`                                                                      | [data.KalshiOrderbookSnapshot](../../models/data/kalshi-orderbook-snapshot.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)                  | :heavy_check_mark:                                                               | Cursor-based pagination for endpoints that don't support offset.                 |