# PredictFunOrderbooksResponse

PredictFun orderbooks endpoint response.

## Example Usage

```typescript
import { PredictFunOrderbooksResponse } from "@predexon/sdk/models/data";

let value: PredictFunOrderbooksResponse = {
  snapshots: [
    {
      marketId: 896446,
      timestamp: 899415,
      bids: [
        {
          price: 1760.12,
          size: 122.43,
        },
      ],
      asks: [
        {
          price: 6614.28,
          size: 7105.49,
        },
      ],
      bestBid: 7733.49,
      bestAsk: 9.66,
      bidDepth: 3677.7,
      askDepth: 7750.05,
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

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `snapshots`                                                                               | [data.PredictFunOrderbookSnapshot](../../models/data/predict-fun-orderbook-snapshot.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `pagination`                                                                              | [data.CursorPagination](../../models/data/cursor-pagination.md)                           | :heavy_check_mark:                                                                        | Cursor-based pagination for endpoints that don't support offset.                          |