# PolymarketListEventsKeysetRequest

## Example Usage

```typescript
import { PolymarketListEventsKeysetRequest } from "@predexon/sdk/models/operations";

let value: PolymarketListEventsKeysetRequest = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `status`                                                           | [data.EventStatusOption](../../models/data/event-status-option.md) | :heavy_minus_sign:                                                 | Filter by status: open or closed                                   |
| `category`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | Filter by category (e.g. Sports, Crypto)                           |
| `search`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Search in title (minimum 3 characters)                             |
| `id`                                                               | *string*[]                                                         | :heavy_minus_sign:                                                 | Filter by event ID(s)                                              |
| `slug`                                                             | *string*[]                                                         | :heavy_minus_sign:                                                 | Filter by event slug(s)                                            |
| `tag`                                                              | *string*[]                                                         | :heavy_minus_sign:                                                 | Filter by tag slug(s)                                              |
| `sort`                                                             | [data.EventSortOption](../../models/data/event-sort-option.md)     | :heavy_minus_sign:                                                 | Sort by                                                            |
| `limit`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | Number of events to return                                         |
| `paginationKey`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | Cursor for the next page                                           |