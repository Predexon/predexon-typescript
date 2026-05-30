# PolymarketGetWalletProfilesRequest

## Example Usage

```typescript
import { PolymarketGetWalletProfilesRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetWalletProfilesRequest = {
  addresses: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `addresses`                               | *string*                                  | :heavy_check_mark:                        | Comma-separated wallet addresses (max 20) |