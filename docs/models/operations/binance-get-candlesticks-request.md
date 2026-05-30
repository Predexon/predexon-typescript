# BinanceGetCandlesticksRequest

## Example Usage

```typescript
import { BinanceGetCandlesticksRequest } from "@predexon/sdk/models/operations";

let value: BinanceGetCandlesticksRequest = {
  symbol: "SOLUSDT",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `symbol`                                                      | [data.BinanceSymbol](../../models/data/binance-symbol.md)     | :heavy_check_mark:                                            | Trading pair                                                  |
| `interval`                                                    | [data.BinanceInterval](../../models/data/binance-interval.md) | :heavy_minus_sign:                                            | Candle interval                                               |
| `startTime`                                                   | *number*                                                      | :heavy_minus_sign:                                            | Unix timestamp (seconds) for range start                      |
| `endTime`                                                     | *number*                                                      | :heavy_minus_sign:                                            | Unix timestamp (seconds) for range end                        |
| `limit`                                                       | *number*                                                      | :heavy_minus_sign:                                            | Max candles to return                                         |