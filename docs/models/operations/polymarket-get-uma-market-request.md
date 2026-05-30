# PolymarketGetUmaMarketRequest

## Example Usage

```typescript
import { PolymarketGetUmaMarketRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetUmaMarketRequest = {
  conditionId: "<id>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `conditionId`                         | *string*                              | :heavy_check_mark:                    | Polymarket condition ID (bytes32 hex) |
| `eventsLimit`                         | *number*                              | :heavy_minus_sign:                    | Max events to return (0 to skip)      |
| `eventsPaginationKey`                 | *string*                              | :heavy_minus_sign:                    | Cursor for next event page            |