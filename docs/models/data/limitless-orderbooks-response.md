# LimitlessOrderbooksResponse

Limitless orderbooks endpoint response.

## Example Usage

```typescript
import { LimitlessOrderbooksResponse } from "@predexon/sdk/models/data";

let value: LimitlessOrderbooksResponse = {
  snapshots: [
    {
      marketSlug: "<value>",
      tokenId: "<id>",
      timestamp: 236498,
      bids: [],
      asks: [],
      midpoint: 3742.84,
      adjustedMidpoint: 2447.67,
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `snapshots`                                                                            | [data.LimitlessOrderbookSnapshot](../../models/data/limitless-orderbook-snapshot.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [data.CursorPagination](../../models/data/cursor-pagination.md)                        | :heavy_check_mark:                                                                     | Cursor-based pagination for endpoints that don't support offset.                       |