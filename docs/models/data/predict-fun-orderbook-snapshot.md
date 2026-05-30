# PredictFunOrderbookSnapshot

Single PredictFun orderbook snapshot.

## Example Usage

```typescript
import { PredictFunOrderbookSnapshot } from "@predexon/sdk/models/data";

let value: PredictFunOrderbookSnapshot = {
  marketId: 299242,
  timestamp: 586935,
  bids: [],
  asks: [],
  bestBid: 2468.64,
  bestAsk: 9759.81,
  bidDepth: 2570.64,
  askDepth: 7085.6,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `marketId`                                                                          | *number*                                                                            | :heavy_check_mark:                                                                  | Market ID                                                                           |
| `timestamp`                                                                         | *number*                                                                            | :heavy_check_mark:                                                                  | Snapshot timestamp (Unix epoch MILLISECONDS)                                        |
| `bids`                                                                              | [data.PredictFunOrderbookLevel](../../models/data/predict-fun-orderbook-level.md)[] | :heavy_check_mark:                                                                  | Bid levels                                                                          |
| `asks`                                                                              | [data.PredictFunOrderbookLevel](../../models/data/predict-fun-orderbook-level.md)[] | :heavy_check_mark:                                                                  | Ask levels                                                                          |
| `bestBid`                                                                           | *number*                                                                            | :heavy_check_mark:                                                                  | Best bid price                                                                      |
| `bestAsk`                                                                           | *number*                                                                            | :heavy_check_mark:                                                                  | Best ask price                                                                      |
| `bidDepth`                                                                          | *number*                                                                            | :heavy_check_mark:                                                                  | Total bid depth                                                                     |
| `askDepth`                                                                          | *number*                                                                            | :heavy_check_mark:                                                                  | Total ask depth                                                                     |