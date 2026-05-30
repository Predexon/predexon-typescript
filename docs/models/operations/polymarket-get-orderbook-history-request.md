# PolymarketGetOrderbookHistoryRequest

## Example Usage

```typescript
import { PolymarketGetOrderbookHistoryRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetOrderbookHistoryRequest = {
  tokenId: "<id>",
  startTime: 728434,
  endTime: 151928,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `tokenId`                                      | *string*                                       | :heavy_check_mark:                             | The token ID (asset) for the Polymarket market |
| `startTime`                                    | *number*                                       | :heavy_check_mark:                             | Start time in Unix timestamp (milliseconds)    |
| `endTime`                                      | *number*                                       | :heavy_check_mark:                             | End time in Unix timestamp (milliseconds)      |
| `limit`                                        | *number*                                       | :heavy_minus_sign:                             | Maximum number of snapshots to return          |
| `paginationKey`                                | *string*                                       | :heavy_minus_sign:                             | Pagination key to get the next chunk of data   |