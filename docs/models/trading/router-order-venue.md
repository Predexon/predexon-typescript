# RouterOrderVenue

## Example Usage

```typescript
import { RouterOrderVenue } from "@predexon/sdk/models/trading";

let value: RouterOrderVenue = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `venue`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `bids`                                                                        | [trading.Bid](../../models/trading/bid.md)[]                                  | :heavy_minus_sign:                                                            | N/A                                                                           |
| `asks`                                                                        | [trading.Ask](../../models/trading/ask.md)[]                                  | :heavy_minus_sign:                                                            | N/A                                                                           |
| `bookUpdatedAt`                                                               | *number*                                                                      | :heavy_minus_sign:                                                            | ms since epoch when this venue's book was last updated, or `null` if unknown. |
| `stale`                                                                       | *boolean*                                                                     | :heavy_minus_sign:                                                            | `true` if the venue's stream was disconnected at snapshot time.               |