# WalletIdentitiesRequest

Bulk identity lookup request.

## Example Usage

```typescript
import { WalletIdentitiesRequest } from "@predexon/sdk/models/data";

let value: WalletIdentitiesRequest = {
  addresses: [],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `addresses`                           | *string*[]                            | :heavy_check_mark:                    | Wallet addresses to look up (max 200) |