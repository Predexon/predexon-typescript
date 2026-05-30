# UmaMarketDetailResponse

Single-market response: current status + event history.

## Example Usage

```typescript
import { UmaMarketDetailResponse } from "@predexon/sdk/models/data";

let value: UmaMarketDetailResponse = {
  conditionId: "<id>",
  question: {
    id: "<id>",
    adapter: "<value>",
    state: "resolved",
    reward: "<value>",
    proposalBond: "<value>",
    rewardToken: "<value>",
    requestTimestamp: 73541,
    creator: "<value>",
    createdBlock: 345661,
    createdTxHash: "<value>",
  },
  eventsPagination: {
    limit: 81914,
    count: 293365,
    hasMore: true,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `conditionId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `question`                                                         | [data.UmaQuestionStatus](../../models/data/uma-question-status.md) | :heavy_check_mark:                                                 | UMA question status (regular non-sports markets).                  |
| `events`                                                           | [data.UmaEvent](../../models/data/uma-event.md)[]                  | :heavy_minus_sign:                                                 | N/A                                                                |
| `eventsPagination`                                                 | [data.CursorPagination](../../models/data/cursor-pagination.md)    | :heavy_check_mark:                                                 | Cursor-based pagination for endpoints that don't support offset.   |