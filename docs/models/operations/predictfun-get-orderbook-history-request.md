# PredictfunGetOrderbookHistoryRequest

## Example Usage

```typescript
import { PredictfunGetOrderbookHistoryRequest } from "@predexon/sdk/models/operations";

let value: PredictfunGetOrderbookHistoryRequest = {
  marketId: 239325,
  startTime: 150829,
  endTime: 325863,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `marketId`                                   | *number*                                     | :heavy_check_mark:                           | The PredictFun market ID                     |
| `startTime`                                  | *number*                                     | :heavy_check_mark:                           | Start time in Unix timestamp (milliseconds)  |
| `endTime`                                    | *number*                                     | :heavy_check_mark:                           | End time in Unix timestamp (milliseconds)    |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | Maximum number of snapshots to return        |
| `paginationKey`                              | *string*                                     | :heavy_minus_sign:                           | Pagination key to get the next chunk of data |