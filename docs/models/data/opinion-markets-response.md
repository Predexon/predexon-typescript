# OpinionMarketsResponse

Response for Opinion markets list endpoint.

## Example Usage

```typescript
import { OpinionMarketsResponse } from "@predexon/sdk/models/data";

let value: OpinionMarketsResponse = {
  markets: [],
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
| `markets`                                                        | [data.OpinionMarket](../../models/data/opinion-market.md)[]      | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |