# SmartActivityResponse

Response for market discovery endpoint.

## Example Usage

```typescript
import { SmartActivityResponse } from "@predexon/sdk/models/data";

let value: SmartActivityResponse = {
  smartWalletCriteria: {},
  window: "1d",
  markets: [
    {
      conditionId: "<id>",
      smartWalletCount: 333648,
      smartVolume: 567.03,
      smartRealizedPnl: 450.79,
      smartTotalPnl: 6231.89,
      avgSmartRoi: 9189.22,
      avgSmartWinRate: 7204.3,
      netBuyersPct: 8509.92,
    },
  ],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `smartWalletCriteria`                                                                                               | [data.SmartActivityResponseSmartWalletCriteria](../../models/data/smart-activity-response-smart-wallet-criteria.md) | :heavy_check_mark:                                                                                                  | Criteria used to define smart wallets                                                                               |
| `window`                                                                                                            | [data.TimeWindow](../../models/data/time-window.md)                                                                 | :heavy_check_mark:                                                                                                  | Time window for rolling metrics.                                                                                    |
| `markets`                                                                                                           | [data.SmartActivityMarket](../../models/data/smart-activity-market.md)[]                                            | :heavy_check_mark:                                                                                                  | Markets with smart wallet activity                                                                                  |
| `pagination`                                                                                                        | [data.CursorPagination](../../models/data/cursor-pagination.md)                                                     | :heavy_check_mark:                                                                                                  | Cursor-based pagination for endpoints that don't support offset.                                                    |