# Fee

Fee metadata (when fees are active)

## Example Usage

```typescript
import { Fee } from "@predexon/sdk/models/trading";

let value: Fee = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `policyApplied`                           | *boolean*                                 | :heavy_minus_sign:                        | N/A                                       |
| `feeBps`                                  | *number*                                  | :heavy_minus_sign:                        | N/A                                       |
| `platformFeeBps`                          | *number*                                  | :heavy_minus_sign:                        | N/A                                       |
| `partnerFeeBps`                           | *number*                                  | :heavy_minus_sign:                        | N/A                                       |
| `grossAmount`                             | *string*                                  | :heavy_minus_sign:                        | Original amount (market BUY only)         |
| `netOrderAmount`                          | *string*                                  | :heavy_minus_sign:                        | Order amount after fees (market BUY only) |
| `maxFeeReserved`                          | *string*                                  | :heavy_minus_sign:                        | Maximum fee reserved (market BUY only)    |