# PredictMarketsResponse

Response for Predict.fun markets list endpoint.

## Example Usage

```typescript
import { PredictMarketsResponse } from "@predexon/sdk/models/data";

let value: PredictMarketsResponse = {
  markets: [
    {
      marketId: 696378,
      title: "<value>",
      status: "<value>",
      outcomes: [],
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
| `markets`                                                        | [data.PredictMarket](../../models/data/predict-market.md)[]      | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |