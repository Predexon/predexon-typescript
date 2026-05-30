# MarketBag

Venue-specific market identification. Populate the fields the target venue requires: Polymarket needs `tokenId`; Predict, Opinion, and Limitless need `tokenId` and one other field (`marketId` for Predict and Opinion; `marketSlug` for Limitless); Hyperliquid needs `assetId`. On responses, the bag contains only the fields the venue surfaces (`tokenId`, `marketId`, `ticker`, `outcome`, `assetId`) — request-only fields like `marketSlug` are not echoed back, and Opinion order-list responses contain `marketId` only (placement responses include both).

## Example Usage

```typescript
import { MarketBag } from "@predexon/sdk/models/trading";

let value: MarketBag = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `tokenId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Outcome token ID                                                                              |
| `marketId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Numeric market ID                                                                             |
| `ticker`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Market ticker                                                                                 |
| `outcome`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Outcome side (e.g., Yes, No)                                                                  |
| `marketSlug`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Market slug. Request-only — accepted as a hint on order placement, not returned in responses. |
| `assetId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Hyperliquid market identifier. Required for hyperliquid orders.                               |