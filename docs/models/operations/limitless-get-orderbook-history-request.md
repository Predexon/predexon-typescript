# LimitlessGetOrderbookHistoryRequest

## Example Usage

```typescript
import { LimitlessGetOrderbookHistoryRequest } from "@predexon/sdk/models/operations";

let value: LimitlessGetOrderbookHistoryRequest = {
  marketSlug: "<value>",
  startTime: 935641,
  endTime: 495463,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `marketSlug`                                 | *string*                                     | :heavy_check_mark:                           | The Limitless market slug                    |
| `startTime`                                  | *number*                                     | :heavy_check_mark:                           | Start time in Unix timestamp (milliseconds)  |
| `endTime`                                    | *number*                                     | :heavy_check_mark:                           | End time in Unix timestamp (milliseconds)    |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | Maximum number of snapshots to return        |
| `paginationKey`                              | *string*                                     | :heavy_minus_sign:                           | Pagination key to get the next chunk of data |