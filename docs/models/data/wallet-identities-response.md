# WalletIdentitiesResponse

Bulk identity lookup response.

## Example Usage

```typescript
import { WalletIdentitiesResponse } from "@predexon/sdk/models/data";

let value: WalletIdentitiesResponse = {
  profiles: {
    "key": {
      address: "1360 N 8th Street",
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `profiles`                                                                      | Record<string, [data.WalletIdentity](../../models/data/wallet-identity.md)>     | :heavy_check_mark:                                                              | Map of requested address (lowercase) -> profile. Missing addresses are omitted. |