# AllPositionsResponse

Response for all-user positions endpoint.

## Example Usage

```typescript
import { AllPositionsResponse } from "@predexon/sdk/models/data";

let value: AllPositionsResponse = {
  positions: [],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `positions`                                                        | [data.AllUsersPosition](../../models/data/all-users-position.md)[] | :heavy_check_mark:                                                 | Position records                                                   |
| `pagination`                                                       | [data.CursorPagination](../../models/data/cursor-pagination.md)    | :heavy_check_mark:                                                 | Cursor-based pagination for endpoints that don't support offset.   |