# BinanceTickData

Single book ticker tick at microsecond granularity.

Sourced from Binance BookTicker stream — best bid/ask with quantities
at the moment of each update. Typically 10-26 updates per second per symbol.

## Example Usage

```typescript
import { BinanceTickData } from "@predexon/sdk/models/data";

let value: BinanceTickData = {
  timestamp: "2026-01-31T12:00:00.123456Z",
  bidPrice: 103250.12,
  askPrice: 103250.22,
  midPrice: 103250.17,
  spread: 0.1,
  bidQty: 0.523,
  askQty: 0.412,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timestamp`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ISO 8601 UTC timestamp with microsecond precision (e.g. 2026-01-31T12:00:00.123456Z) |
| `bidPrice`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | Best bid price in USDT                                                               |
| `askPrice`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | Best ask price in USDT                                                               |
| `midPrice`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | Mid price: (bid + ask) / 2                                                           |
| `spread`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | Bid-ask spread: ask - bid                                                            |
| `bidQty`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | Quantity available at best bid                                                       |
| `askQty`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | Quantity available at best ask                                                       |