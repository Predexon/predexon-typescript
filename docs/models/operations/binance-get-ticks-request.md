# BinanceGetTicksRequest

## Example Usage

```typescript
import { BinanceGetTicksRequest } from "@predexon/sdk/models/operations";

let value: BinanceGetTicksRequest = {
  symbol: "BTCUSDT",
  startTime: 532051,
  endTime: 434669,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `symbol`                                                  | [data.BinanceSymbol](../../models/data/binance-symbol.md) | :heavy_check_mark:                                        | Trading pair                                              |
| `startTime`                                               | *number*                                                  | :heavy_check_mark:                                        | Unix timestamp (seconds) for range start                  |
| `endTime`                                                 | *number*                                                  | :heavy_check_mark:                                        | Unix timestamp (seconds) for range end                    |
| `limit`                                                   | *number*                                                  | :heavy_minus_sign:                                        | Max ticks per page                                        |
| `paginationKey`                                           | *string*                                                  | :heavy_minus_sign:                                        | Cursor for next page                                      |