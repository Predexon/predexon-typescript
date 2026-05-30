# BinanceCandleData

Single OHLCV candlestick derived from book ticker mid-prices.

Open/high/low/close reflect the mid-price (not trade price).
tick_count indicates market activity density within the candle.

## Example Usage

```typescript
import { BinanceCandleData } from "@predexon/sdk/models/data";

let value: BinanceCandleData = {
  timestamp: 1706745600,
  open: 103250.12,
  high: 103300.5,
  low: 103200,
  close: 103275.3,
  tickCount: 15420,
  avgSpread: 0.1,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `timestamp`                                  | *number*                                     | :heavy_check_mark:                           | Unix timestamp (seconds) at period start     |
| `open`                                       | *number*                                     | :heavy_check_mark:                           | Opening mid-price in USDT                    |
| `high`                                       | *number*                                     | :heavy_check_mark:                           | Highest mid-price in USDT                    |
| `low`                                        | *number*                                     | :heavy_check_mark:                           | Lowest mid-price in USDT                     |
| `close`                                      | *number*                                     | :heavy_check_mark:                           | Closing mid-price in USDT                    |
| `tickCount`                                  | *number*                                     | :heavy_check_mark:                           | Number of book ticker updates in this candle |
| `avgSpread`                                  | *number*                                     | :heavy_check_mark:                           | Average bid-ask spread over this candle      |