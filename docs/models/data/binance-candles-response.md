# BinanceCandlesResponse

OHLCV candlestick response for a Binance trading pair.

Intervals 1s and 1m are served from pre-aggregated materialized views.
Larger intervals (5m, 15m, 1h, 4h, 1d) are aggregated on-the-fly from 1m data.

## Example Usage

```typescript
import { BinanceCandlesResponse } from "@predexon/sdk/models/data";

let value: BinanceCandlesResponse = {
  symbol: "<value>",
  interval: "<value>",
  candles: [
    {
      timestamp: 1706745600,
      open: 103250.12,
      high: 103300.5,
      low: 103200,
      close: 103275.3,
      tickCount: 15420,
      avgSpread: 0.1,
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `symbol`                                                             | *string*                                                             | :heavy_check_mark:                                                   | Trading pair (e.g. BTCUSDT)                                          |
| `interval`                                                           | *string*                                                             | :heavy_check_mark:                                                   | Candle interval (e.g. 15m, 1h)                                       |
| `candles`                                                            | [data.BinanceCandleData](../../models/data/binance-candle-data.md)[] | :heavy_check_mark:                                                   | Array of candles, ordered by timestamp ASC                           |