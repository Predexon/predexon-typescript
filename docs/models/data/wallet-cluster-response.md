# WalletClusterResponse

Connected wallets for a given seed, sourced from the wallet-cluster job.

## Example Usage

```typescript
import { WalletClusterResponse } from "@predexon/sdk/models/data";

let value: WalletClusterResponse = {
  seed: "<value>",
  siblings: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `seed`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The seed wallet address (lower-cased)                                    |
| `siblings`                                                               | [data.ClusterSiblingEntry](../../models/data/cluster-sibling-entry.md)[] | :heavy_check_mark:                                                       | Top-N siblings by confidence                                             |
| `computedAt`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | Unix timestamp when this cluster was last computed (None if cache miss). |