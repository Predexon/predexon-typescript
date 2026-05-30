# KalshiTradesResponse

Kalshi trades endpoint response.

## Example Usage

```typescript
import { KalshiTradesResponse } from "@predexon/sdk/models/data";

let value: KalshiTradesResponse = {
  trades: [
    {
      tradeId: "<id>",
      ticker: "<value>",
      count: 174096,
      yesPrice: 7231.24,
      noPrice: 2438.6,
      takerSide: "no",
      createdTime: 452081,
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
| `trades`                                                         | [data.KalshiTrade](../../models/data/kalshi-trade.md)[]          | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |