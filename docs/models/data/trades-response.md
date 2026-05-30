# TradesResponse

Trades endpoint response.

## Example Usage

```typescript
import { TradesResponse } from "@predexon/sdk/models/data";

let value: TradesResponse = {
  trades: [],
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
| `trades`                                                         | [data.Trade](../../models/data/trade.md)[]                       | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |