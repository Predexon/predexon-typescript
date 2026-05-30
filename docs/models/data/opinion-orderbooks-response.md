# OpinionOrderbooksResponse

Opinion orderbooks endpoint response.

## Example Usage

```typescript
import { OpinionOrderbooksResponse } from "@predexon/sdk/models/data";

let value: OpinionOrderbooksResponse = {
  snapshots: [],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `snapshots`                                                                        | [data.OpinionOrderbookSnapshot](../../models/data/opinion-orderbook-snapshot.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `pagination`                                                                       | [data.CursorPagination](../../models/data/cursor-pagination.md)                    | :heavy_check_mark:                                                                 | Cursor-based pagination for endpoints that don't support offset.                   |