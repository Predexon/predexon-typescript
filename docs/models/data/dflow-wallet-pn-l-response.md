# DflowWalletPnLResponse

Dflow wallet PnL endpoint response.

## Example Usage

```typescript
import { DflowWalletPnLResponse } from "@predexon/sdk/models/data";

let value: DflowWalletPnLResponse = {
  granularity: "week",
  startTime: 557927,
  endTime: 816681,
  walletAddress: "<value>",
  pnlOverTime: [
    {
      timestamp: 835661,
      pnlToDate: 8955.44,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `granularity`                                                          | [data.PnLGranularity](../../models/data/pn-l-granularity.md)           | :heavy_check_mark:                                                     | PnL granularity enum.                                                  |
| `startTime`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `endTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `walletAddress`                                                        | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pnlOverTime`                                                          | [data.DflowPnLDataPoint](../../models/data/dflow-pn-l-data-point.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |