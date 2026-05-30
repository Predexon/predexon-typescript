# KalshiGetTradesRequest

## Example Usage

```typescript
import { KalshiGetTradesRequest } from "@predexon/sdk/models/operations";

let value: KalshiGetTradesRequest = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `ticker`                                                       | *string*                                                       | :heavy_minus_sign:                                             | Filter by market ticker                                        |
| `eventTicker`                                                  | *string*                                                       | :heavy_minus_sign:                                             | Filter by event ticker (prefix match)                          |
| `takerSide`                                                    | [data.KalshiTakerSide](../../models/data/kalshi-taker-side.md) | :heavy_minus_sign:                                             | Filter by taker side: yes or no                                |
| `startTime`                                                    | *number*                                                       | :heavy_minus_sign:                                             | Unix timestamp (seconds) for start                             |
| `endTime`                                                      | *number*                                                       | :heavy_minus_sign:                                             | Unix timestamp (seconds) for end                               |
| `minCount`                                                     | *number*                                                       | :heavy_minus_sign:                                             | Minimum contract count                                         |
| `limit`                                                        | *number*                                                       | :heavy_minus_sign:                                             | Number of trades to return                                     |
| `order`                                                        | [data.OrderDirection](../../models/data/order-direction.md)    | :heavy_minus_sign:                                             | Sort order: asc or desc                                        |
| `paginationKey`                                                | *string*                                                       | :heavy_minus_sign:                                             | Cursor for pagination                                          |