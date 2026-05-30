# ActivityResponse

Activity endpoint response.

## Example Usage

```typescript
import { ActivityResponse } from "@predexon/sdk/models/data";

let value: ActivityResponse = {
  activities: [
    {
      side: "SPLIT",
      marketSlug: "<value>",
      conditionId: "<id>",
      shares: 777159,
      sharesNormalized: 8897.06,
      amountUsd: 6436.1,
      price: 881.58,
      txHash: "<value>",
      title: "<value>",
      timestamp: 487075,
      user: "Buford_Johnston",
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `activities`                                                     | [data.Activity](../../models/data/activity.md)[]                 | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |