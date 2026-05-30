# OffsetPagination

Offset-based pagination for markets list endpoints.

## Example Usage

```typescript
import { OffsetPagination } from "@predexon/sdk/models/data";

let value: OffsetPagination = {
  limit: 170159,
  offset: 841082,
  total: 168759,
  hasMore: false,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `limit`                                | *number*                               | :heavy_check_mark:                     | Requested limit                        |
| `offset`                               | *number*                               | :heavy_check_mark:                     | Current offset                         |
| `total`                                | *number*                               | :heavy_check_mark:                     | Total number of matching items         |
| `hasMore`                              | *boolean*                              | :heavy_check_mark:                     | Whether there are more items available |