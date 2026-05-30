# PolymarketListUmaMarketsRequest

## Example Usage

```typescript
import { PolymarketListUmaMarketsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketListUmaMarketsRequest = {
  state: "New Jersey",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `state`                                              | *string*                                             | :heavy_check_mark:                                   | UMA state: pending\|proposed\|disputed\|reset\|resolved. |
| `limit`                                              | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `paginationKey`                                      | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |