# DflowGetTradesRequest

## Example Usage

```typescript
import { DflowGetTradesRequest } from "@predexon/sdk/models/operations";

let value: DflowGetTradesRequest = {
  wallet: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `wallet`                                                     | *string*                                                     | :heavy_check_mark:                                           | Solana wallet address (base58-encoded, 32-44 chars)          |
| `marketTicker`                                               | *string*                                                     | :heavy_minus_sign:                                           | Filter by market ticker                                      |
| `outcomeMint`                                                | *string*                                                     | :heavy_minus_sign:                                           | Filter by outcome mint address                               |
| `tradeType`                                                  | [data.DflowTradeType](../../models/data/dflow-trade-type.md) | :heavy_minus_sign:                                           | Filter by trade type: BUY_FILL, SELL_FILL, or REDEEM         |
| `startTime`                                                  | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for start                           |
| `endTime`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for end                             |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Number of trades to return                                   |
| `order`                                                      | [data.OrderDirection](../../models/data/order-direction.md)  | :heavy_minus_sign:                                           | Sort order: asc or desc                                      |
| `paginationKey`                                              | *string*                                                     | :heavy_minus_sign:                                           | Pagination key for cursor-based pagination                   |