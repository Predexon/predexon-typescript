# KalshiOrderbookSnapshot

Single Kalshi orderbook snapshot.

## Example Usage

```typescript
import { KalshiOrderbookSnapshot } from "@predexon/sdk/models/data";

let value: KalshiOrderbookSnapshot = {
  ticker: "<value>",
  timestamp: 241989,
  yesBids: [
    {
      price: 141325,
      size: 314573,
    },
  ],
  yesAsks: [],
  bestBid: 687013,
  bestAsk: 707174,
  bidDepth: 161675,
  askDepth: 506719,
  sequence: 329390,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `ticker`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | Market ticker                                                              |
| `timestamp`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | Snapshot timestamp in milliseconds                                         |
| `yesBids`                                                                  | [data.KalshiOrderbookLevel](../../models/data/kalshi-orderbook-level.md)[] | :heavy_check_mark:                                                         | Yes bid levels, ordered by price descending                                |
| `yesAsks`                                                                  | [data.KalshiOrderbookLevel](../../models/data/kalshi-orderbook-level.md)[] | :heavy_check_mark:                                                         | Yes ask levels, ordered by price ascending                                 |
| `bestBid`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | Best bid price in cents                                                    |
| `bestAsk`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | Best ask price in cents                                                    |
| `bidDepth`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Total bid depth (number of contracts)                                      |
| `askDepth`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Total ask depth (number of contracts)                                      |
| `sequence`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Sequence number for ordering within same timestamp                         |