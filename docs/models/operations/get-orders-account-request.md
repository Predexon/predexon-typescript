# GetOrdersAccountRequest

## Example Usage

```typescript
import { GetOrdersAccountRequest } from "@predexon/sdk/models/operations";

let value: GetOrdersAccountRequest = {
  accountId: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `accountId`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `venue`                                                                                 | [operations.GetOrdersAccountVenue](../../models/operations/get-orders-account-venue.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `aggregated`                                                                            | *boolean*                                                                               | :heavy_minus_sign:                                                                      | When `true`, strips the per-row `venue` field for venue-agnostic UIs.                   |