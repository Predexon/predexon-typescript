# UmaEvent

Single UMA event row from uma_event_by_market.

## Example Usage

```typescript
import { UmaEvent } from "@predexon/sdk/models/data";

let value: UmaEvent = {
  id: "<id>",
  eventType: "<value>",
  sourceContract: "<value>",
  blockNumber: 393553,
  blockTimestamp: 713675,
  logIndex: 558086,
  txHash: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `eventType`        | *string*           | :heavy_check_mark: | N/A                |
| `sourceContract`   | *string*           | :heavy_check_mark: | N/A                |
| `blockNumber`      | *number*           | :heavy_check_mark: | N/A                |
| `blockTimestamp`   | *number*           | :heavy_check_mark: | N/A                |
| `logIndex`         | *number*           | :heavy_check_mark: | N/A                |
| `txHash`           | *string*           | :heavy_check_mark: | N/A                |
| `questionId`       | *string*           | :heavy_minus_sign: | N/A                |
| `gameId`           | *string*           | :heavy_minus_sign: | N/A                |
| `sportsMarketId`   | *string*           | :heavy_minus_sign: | N/A                |
| `conditionId`      | *string*           | :heavy_minus_sign: | N/A                |
| `requester`        | *string*           | :heavy_minus_sign: | N/A                |
| `proposer`         | *string*           | :heavy_minus_sign: | N/A                |
| `disputer`         | *string*           | :heavy_minus_sign: | N/A                |
| `proposedPrice`    | *string*           | :heavy_minus_sign: | N/A                |
| `settledPrice`     | *string*           | :heavy_minus_sign: | N/A                |
| `payout`           | *string*           | :heavy_minus_sign: | N/A                |
| `expirationTime`   | *number*           | :heavy_minus_sign: | N/A                |
| `payouts`          | *string*[]         | :heavy_minus_sign: | N/A                |
| `homeScore`        | *number*           | :heavy_minus_sign: | N/A                |
| `awayScore`        | *number*           | :heavy_minus_sign: | N/A                |
| `bondAmount`       | *string*           | :heavy_minus_sign: | N/A                |
| `livenessAmount`   | *number*           | :heavy_minus_sign: | N/A                |
| `ancillaryData`    | *string*           | :heavy_minus_sign: | N/A                |