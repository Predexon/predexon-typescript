# DflowGetWalletPositionsRequest

## Example Usage

```typescript
import { DflowGetWalletPositionsRequest } from "@predexon/sdk/models/operations";

let value: DflowGetWalletPositionsRequest = {
  wallet: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `wallet`                                                                | *string*                                                                | :heavy_check_mark:                                                      | Solana wallet address (base58-encoded, 32-44 chars)                     |
| `status`                                                                | [data.DflowPositionStatus](../../models/data/dflow-position-status.md)  | :heavy_minus_sign:                                                      | Filter by position status: open, closed, or all (default)               |
| `outcomeMint`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Filter by specific outcome mint address                                 |
| `marketTicker`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | Filter by market ticker (case-insensitive)                              |
| `sortBy`                                                                | [data.DflowPositionSortBy](../../models/data/dflow-position-sort-by.md) | :heavy_minus_sign:                                                      | Sort by: total_qty_bought, total_cost_basis, or realized_pnl            |
| `order`                                                                 | [data.OrderDirection](../../models/data/order-direction.md)             | :heavy_minus_sign:                                                      | Sort order: asc or desc                                                 |
| `limit`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Maximum number of positions to return (1-500)                           |
| `paginationKey`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | Base64-encoded cursor for pagination                                    |