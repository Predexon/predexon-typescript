# KalshiGetOrderbookHistoryRequest

## Example Usage

```typescript
import { KalshiGetOrderbookHistoryRequest } from "@predexon/sdk/models/operations";

let value: KalshiGetOrderbookHistoryRequest = {
  ticker: "<value>",
  startTime: 124922,
  endTime: 389226,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `ticker`                                     | *string*                                     | :heavy_check_mark:                           | The Kalshi market ticker                     |
| `startTime`                                  | *number*                                     | :heavy_check_mark:                           | Start time in Unix timestamp (milliseconds)  |
| `endTime`                                    | *number*                                     | :heavy_check_mark:                           | End time in Unix timestamp (milliseconds)    |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | Maximum number of snapshots to return        |
| `paginationKey`                              | *string*                                     | :heavy_minus_sign:                           | Pagination key to get the next chunk of data |