# WalletIdentity

Identity + profile metadata for a Polymarket wallet.

## Example Usage

```typescript
import { WalletIdentity } from "@predexon/sdk/models/data";

let value: WalletIdentity = {
  address: "88140 Koelpin Parkways",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `address`                                     | *string*                                      | :heavy_check_mark:                            | Wallet address (proxy / safe address)         |
| `signer`                                      | *string*                                      | :heavy_minus_sign:                            | Underlying EOA / signer address               |
| `type`                                        | *string*                                      | :heavy_minus_sign:                            | Wallet type (proxy, safe, eoa, etc.)          |
| `displayName`                                 | *string*                                      | :heavy_minus_sign:                            | User-set display name from Gamma profile      |
| `pseudonym`                                   | *string*                                      | :heavy_minus_sign:                            | Auto-generated pseudonym                      |
| `bio`                                         | *string*                                      | :heavy_minus_sign:                            | User bio                                      |
| `profileImage`                                | *string*                                      | :heavy_minus_sign:                            | Profile picture URL                           |
| `xUsername`                                   | *string*                                      | :heavy_minus_sign:                            | Linked X (Twitter) username                   |
| `verifiedBadge`                               | *boolean*                                     | :heavy_minus_sign:                            | Verified badge on Polymarket                  |
| `isCreator`                                   | *boolean*                                     | :heavy_minus_sign:                            | Polymarket market creator                     |
| `isMod`                                       | *boolean*                                     | :heavy_minus_sign:                            | Polymarket moderator                          |
| `usdcBalance`                                 | *number*                                      | :heavy_minus_sign:                            | On-chain USDC balance (USD)                   |
| `lastTransferAt`                              | *number*                                      | :heavy_minus_sign:                            | Unix ts of last USDC transfer                 |
| `createdAt`                                   | *number*                                      | :heavy_minus_sign:                            | Unix ts the wallet was first observed         |
| `profileFetchedAt`                            | *number*                                      | :heavy_minus_sign:                            | Unix ts profile was last refreshed from Gamma |