# PolymarketGetWalletPnLRequest

## Example Usage

```typescript
import { PolymarketGetWalletPnLRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetWalletPnLRequest = {
  wallet: "<value>",
  granularity: "year",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `wallet`                                                     | *string*                                                     | :heavy_check_mark:                                           | Wallet address to fetch PnL for                              |
| `granularity`                                                | [data.PnLGranularity](../../models/data/pn-l-granularity.md) | :heavy_check_mark:                                           | Time granularity for PnL data                                |
| `startTime`                                                  | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for start of range                  |
| `endTime`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for end of range                    |
| `conditionId`                                                | *string*                                                     | :heavy_minus_sign:                                           | Filter to a specific market by condition ID                  |