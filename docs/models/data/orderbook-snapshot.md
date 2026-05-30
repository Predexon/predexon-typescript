# OrderbookSnapshot

Single orderbook snapshot.

Note: This model uses MILLISECONDS for timestamps (not seconds) to match
the source data format from the orderbook indexer.

## Example Usage

```typescript
import { OrderbookSnapshot } from "@predexon/sdk/models/data";

let value: OrderbookSnapshot = {
  asks: [],
  bids: [
    {
      size: 2711.58,
      price: 198.63,
    },
  ],
  hash: "<value>",
  assetId: "<id>",
  timestamp: 313447,
  tickSize: "<value>",
  indexedAt: 609276,
  market: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `asks`                                                        | [data.OrderbookLevel](../../models/data/orderbook-level.md)[] | :heavy_check_mark:                                            | Ask price levels, ordered by price                            |
| `bids`                                                        | [data.OrderbookLevel](../../models/data/orderbook-level.md)[] | :heavy_check_mark:                                            | Bid price levels, ordered by price                            |
| `hash`                                                        | *string*                                                      | :heavy_check_mark:                                            | Orderbook state hash                                          |
| `assetId`                                                     | *string*                                                      | :heavy_check_mark:                                            | Asset/token ID                                                |
| `timestamp`                                                   | *number*                                                      | :heavy_check_mark:                                            | Snapshot timestamp (Unix epoch MILLISECONDS)                  |
| `tickSize`                                                    | *string*                                                      | :heavy_check_mark:                                            | Tick size for price levels                                    |
| `indexedAt`                                                   | *number*                                                      | :heavy_check_mark:                                            | When snapshot was indexed (Unix epoch MILLISECONDS)           |
| `market`                                                      | *string*                                                      | :heavy_check_mark:                                            | Market condition ID / address                                 |