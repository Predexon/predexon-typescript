# PolymarketGetConnectedWalletsResponse

## Example Usage

```typescript
import { PolymarketGetConnectedWalletsResponse } from "@predexon/sdk/models/operations";

let value: PolymarketGetConnectedWalletsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    status: "compute_pending",
    retryAfterSeconds: 60,
    reason: "miss",
    message:
      "Cluster compute is running in the background. Retry after the indicated interval to receive the full result.",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | *operations.PolymarketGetConnectedWalletsResponseResult* | :heavy_check_mark:                                       | N/A                                                      |