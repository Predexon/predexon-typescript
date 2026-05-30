# BinanceTicksResponse

Paginated response of raw book ticker data.

Use cursor-based pagination to iterate through large time windows.
A 15-minute window typically contains ~63K ticks per symbol.

## Example Usage

```typescript
import { BinanceTicksResponse } from "@predexon/sdk/models/data";

let value: BinanceTicksResponse = {
  symbol: "<value>",
  ticks: [
    {
      timestamp: "2026-01-31T12:00:00.123456Z",
      bidPrice: 103250.12,
      askPrice: 103250.22,
      midPrice: 103250.17,
      spread: 0.1,
      bidQty: 0.523,
      askQty: 0.412,
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
| `symbol`                                                         | *string*                                                         | :heavy_check_mark:                                               | Trading pair (e.g. BTCUSDT)                                      |
| `ticks`                                                          | [data.BinanceTickData](../../models/data/binance-tick-data.md)[] | :heavy_check_mark:                                               | Array of tick data points, ordered by timestamp ASC              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |