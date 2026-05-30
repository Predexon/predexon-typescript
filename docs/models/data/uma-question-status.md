# UmaQuestionStatus

UMA question status (regular non-sports markets).

## Example Usage

```typescript
import { UmaQuestionStatus } from "@predexon/sdk/models/data";

let value: UmaQuestionStatus = {
  id: "<id>",
  adapter: "<value>",
  state: "disputed",
  reward: "<value>",
  proposalBond: "<value>",
  rewardToken: "<value>",
  requestTimestamp: 912077,
  creator: "<value>",
  createdBlock: 830049,
  createdTxHash: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Question ID (bytes32 hex)                                        |
| `adapter`                                                        | *string*                                                         | :heavy_check_mark:                                               | Source adapter contract address                                  |
| `conditionId`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `marketId`                                                       | *string*                                                         | :heavy_minus_sign:                                               | Polymarket market ID (decimal string)                            |
| `title`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `state`                                                          | [data.UmaQuestionState](../../models/data/uma-question-state.md) | :heavy_check_mark:                                               | N/A                                                              |
| `isPaused`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `isFlagged`                                                      | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `resolvedPrice`                                                  | *string*                                                         | :heavy_minus_sign:                                               | UMA payout numerator (1e18-scaled, string)                       |
| `resolvedAt`                                                     | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `pausedAt`                                                       | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `flaggedAt`                                                      | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `lastEventAt`                                                    | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `lastTxHash`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `resetCount`                                                     | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `reward`                                                         | *string*                                                         | :heavy_check_mark:                                               | Proposer reward (1e18-scaled, string)                            |
| `proposalBond`                                                   | *string*                                                         | :heavy_check_mark:                                               | Proposal bond (1e18-scaled, string)                              |
| `rewardToken`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `requestTimestamp`                                               | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `creator`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdBlock`                                                   | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdTxHash`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |