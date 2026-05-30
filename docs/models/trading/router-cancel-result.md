# RouterCancelResult

## Example Usage

```typescript
import { RouterCancelResult } from "@predexon/sdk/models/trading";

let value: RouterCancelResult = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `venue`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `orderId`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `status`                                                                   | [trading.RouterCancelStatus](../../models/trading/router-cancel-status.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `error`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | Present only on `failed` status.                                           |