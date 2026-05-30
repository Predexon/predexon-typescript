# LimitlessOrderbookSnapshot

Single Limitless orderbook snapshot (YES side only; invert for NO).

## Example Usage

```typescript
import { LimitlessOrderbookSnapshot } from "@predexon/sdk/models/data";

let value: LimitlessOrderbookSnapshot = {
  marketSlug: "<value>",
  tokenId: "<id>",
  timestamp: 539808,
  bids: [],
  asks: [
    {
      price: 6431.97,
      size: 5821.3,
    },
  ],
  midpoint: 6198.24,
  adjustedMidpoint: 1538.19,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `marketSlug`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Market slug identifier                                                           |
| `tokenId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | YES token ID (metadata)                                                          |
| `timestamp`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | Snapshot timestamp (Unix epoch MILLISECONDS)                                     |
| `bids`                                                                           | [data.LimitlessOrderbookLevel](../../models/data/limitless-orderbook-level.md)[] | :heavy_check_mark:                                                               | Bid levels (buying YES)                                                          |
| `asks`                                                                           | [data.LimitlessOrderbookLevel](../../models/data/limitless-orderbook-level.md)[] | :heavy_check_mark:                                                               | Ask levels (selling YES)                                                         |
| `midpoint`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | Midpoint price                                                                   |
| `adjustedMidpoint`                                                               | *number*                                                                         | :heavy_check_mark:                                                               | Adjusted midpoint price                                                          |