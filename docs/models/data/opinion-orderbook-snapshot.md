# OpinionOrderbookSnapshot

Single Opinion orderbook snapshot (YES side only; invert for NO).

## Example Usage

```typescript
import { OpinionOrderbookSnapshot } from "@predexon/sdk/models/data";

let value: OpinionOrderbookSnapshot = {
  marketId: 138520,
  tokenId: "<id>",
  timestamp: 841324,
  bids: [
    {
      price: 1716.76,
      size: 9163.58,
    },
  ],
  asks: [
    {
      price: 3050.73,
      size: 8071.27,
    },
  ],
  bestBid: 9172.21,
  bestAsk: 8404.54,
  bidDepth: 9574.6,
  askDepth: 6032.45,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `marketId`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | Market ID                                                                    |
| `tokenId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | YES token ID (metadata)                                                      |
| `timestamp`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Snapshot timestamp (Unix epoch MILLISECONDS)                                 |
| `bids`                                                                       | [data.OpinionOrderbookLevel](../../models/data/opinion-orderbook-level.md)[] | :heavy_check_mark:                                                           | Bid levels                                                                   |
| `asks`                                                                       | [data.OpinionOrderbookLevel](../../models/data/opinion-orderbook-level.md)[] | :heavy_check_mark:                                                           | Ask levels                                                                   |
| `bestBid`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | Best bid price                                                               |
| `bestAsk`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | Best ask price                                                               |
| `bidDepth`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | Total bid depth                                                              |
| `askDepth`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | Total ask depth                                                              |