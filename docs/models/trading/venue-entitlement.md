# VenueEntitlement

## Example Usage

```typescript
import { VenueEntitlement } from "@predexon/sdk/models/trading";

let value: VenueEntitlement = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `status`                                                                              | [trading.VenueEntitlementStatus](../../models/trading/venue-entitlement-status.md)    | :heavy_minus_sign:                                                                    | Venue setup status                                                                    |
| `custodyMode`                                                                         | [trading.CustodyMode](../../models/trading/custody-mode.md)                           | :heavy_minus_sign:                                                                    | Predexon manages keys for every supported venue.                                      |
| `address`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | On-chain wallet address for the venue. Absent until the venue's `status` is `active`. |
| `error`                                                                               | *string*                                                                              | :heavy_minus_sign:                                                                    | Failure reason. Absent unless the venue's `status` is `failed`.                       |