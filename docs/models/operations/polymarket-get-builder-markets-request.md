# PolymarketGetBuilderMarketsRequest

## Example Usage

```typescript
import { PolymarketGetBuilderMarketsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetBuilderMarketsRequest = {
  builderCode: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `builderCode`                        | *string*                             | :heavy_check_mark:                   | Builder code (bytes32 hex)           |
| `window`                             | *string*                             | :heavy_minus_sign:                   | Rolling window: 24h, 7d, 30d, or all |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | N/A                                  |