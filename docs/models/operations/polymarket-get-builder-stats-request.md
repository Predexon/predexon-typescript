# PolymarketGetBuilderStatsRequest

## Example Usage

```typescript
import { PolymarketGetBuilderStatsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetBuilderStatsRequest = {
  builderCode: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `builderCode`                        | *string*                             | :heavy_check_mark:                   | Builder code (bytes32 hex)           |
| `window`                             | *string*                             | :heavy_minus_sign:                   | Rolling window: 24h, 7d, 30d, or all |