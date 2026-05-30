# WalletIdentityResponse

Response for the single-wallet identity endpoint.

## Example Usage

```typescript
import { WalletIdentityResponse } from "@predexon/sdk/models/data";

let value: WalletIdentityResponse = {
  address: "8983 Welch Summit",
  found: false,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `address`                                                   | *string*                                                    | :heavy_check_mark:                                          | Requested wallet address (lowercased)                       |
| `found`                                                     | *boolean*                                                   | :heavy_check_mark:                                          | Whether a wallet record was found                           |
| `profile`                                                   | [data.WalletIdentity](../../models/data/wallet-identity.md) | :heavy_minus_sign:                                          | Profile data if found                                       |