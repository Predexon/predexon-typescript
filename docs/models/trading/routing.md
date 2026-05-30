# Routing

Opt-in routing audit. Present only when the request included `?explain=true`. Surfaces every venue the router considered, including dropped venues with their reason.

## Example Usage

```typescript
import { Routing } from "@predexon/sdk/models/trading";

let value: Routing = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `considered`                                               | [trading.Considered](../../models/trading/considered.md)[] | :heavy_minus_sign:                                         | N/A                                                        |