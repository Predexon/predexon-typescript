# UmaMarketsListResponse

## Example Usage

```typescript
import { UmaMarketsListResponse } from "@predexon/sdk/models/data";

let value: UmaMarketsListResponse = {
  state: "Florida",
  items: [],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `state`                                                                 | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `items`                                                                 | [data.UmaMarketsListItem](../../models/data/uma-markets-list-item.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |
| `pagination`                                                            | [data.CursorPagination](../../models/data/cursor-pagination.md)         | :heavy_check_mark:                                                      | Cursor-based pagination for endpoints that don't support offset.        |