# LimitlessMarketsResponse

Response for Limitless markets list endpoint.

## Example Usage

```typescript
import { LimitlessMarketsResponse } from "@predexon/sdk/models/data";

let value: LimitlessMarketsResponse = {
  markets: [
    {
      conditionId: "<id>",
      marketSlug: "<value>",
      title: "<value>",
      status: "<value>",
      tradeType: "<value>",
      outcomes: [],
      collateral: {},
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
| `markets`                                                        | [data.LimitlessMarket](../../models/data/limitless-market.md)[]  | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |