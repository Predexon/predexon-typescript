# PolymarketGetConnectedWalletsRequest

## Example Usage

```typescript
import { PolymarketGetConnectedWalletsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetConnectedWalletsRequest = {
  address: "19699 Buckridge Meadows",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `address`                                                       | *string*                                                        | :heavy_check_mark:                                              | Seed wallet address (proxy or signer).                          |
| `minConfidence`                                                 | *number*                                                        | :heavy_minus_sign:                                              | Minimum confidence to include (default 70 = strong-only).       |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | Max siblings to return.                                         |
| `recompute`                                                     | *boolean*                                                       | :heavy_minus_sign:                                              | Kick off a fresh background BFS even if a cached result exists. |