# PolymarketGetBuilderLeaderboardRequest

## Example Usage

```typescript
import { PolymarketGetBuilderLeaderboardRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetBuilderLeaderboardRequest = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `window`                             | *string*                             | :heavy_minus_sign:                   | Rolling window: 24h, 7d, 30d, or all |
| `sortBy`                             | *string*                             | :heavy_minus_sign:                   | Sort field: 'volume' or 'fee'        |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Max entries to return                |