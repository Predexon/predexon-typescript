# CursorPagination

Cursor-based pagination for endpoints that don't support offset.

## Example Usage

```typescript
import { CursorPagination } from "@predexon/sdk/models/data";

let value: CursorPagination = {
  limit: 279562,
  count: 958790,
  hasMore: false,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `limit`                                | *number*                               | :heavy_check_mark:                     | Requested limit                        |
| `count`                                | *number*                               | :heavy_check_mark:                     | Number of items in current response    |
| `paginationKey`                        | *string*                               | :heavy_minus_sign:                     | Base64-encoded cursor for next page    |
| `hasMore`                              | *boolean*                              | :heavy_check_mark:                     | Whether there are more items available |