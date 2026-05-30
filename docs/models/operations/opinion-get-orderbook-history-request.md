# OpinionGetOrderbookHistoryRequest

## Example Usage

```typescript
import { OpinionGetOrderbookHistoryRequest } from "@predexon/sdk/models/operations";

let value: OpinionGetOrderbookHistoryRequest = {
  marketId: 915527,
  startTime: 560489,
  endTime: 39979,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `marketId`                                   | *number*                                     | :heavy_check_mark:                           | The Opinion market ID                        |
| `startTime`                                  | *number*                                     | :heavy_check_mark:                           | Start time in Unix timestamp (milliseconds)  |
| `endTime`                                    | *number*                                     | :heavy_check_mark:                           | End time in Unix timestamp (milliseconds)    |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | Maximum number of snapshots to return        |
| `paginationKey`                              | *string*                                     | :heavy_minus_sign:                           | Pagination key to get the next chunk of data |