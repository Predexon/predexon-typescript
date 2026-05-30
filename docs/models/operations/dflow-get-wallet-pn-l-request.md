# DflowGetWalletPnLRequest

## Example Usage

```typescript
import { DflowGetWalletPnLRequest } from "@predexon/sdk/models/operations";

let value: DflowGetWalletPnLRequest = {
  wallet: "<value>",
  granularity: "month",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `wallet`                                                     | *string*                                                     | :heavy_check_mark:                                           | Solana wallet address (base58-encoded, 32-44 chars)          |
| `granularity`                                                | [data.PnLGranularity](../../models/data/pn-l-granularity.md) | :heavy_check_mark:                                           | Time granularity: day, week, month, year, or all             |
| `startTime`                                                  | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for start of range                  |
| `endTime`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for end of range                    |