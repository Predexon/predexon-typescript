# UmaMarketsListItem

## Example Usage

```typescript
import { UmaMarketsListItem } from "@predexon/sdk/models/data";

let value: UmaMarketsListItem = {
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `question`                                                         | [data.UmaQuestionStatus](../../models/data/uma-question-status.md) | :heavy_check_mark:                                                 | UMA question status (regular non-sports markets).                  |