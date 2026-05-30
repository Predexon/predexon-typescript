# AccountOrderResponseType

Order type. Populated on placement responses (echoed from the request); `null` on list and detail responses.

## Example Usage

```typescript
import { AccountOrderResponseType } from "@predexon/sdk/models/trading";

let value: AccountOrderResponseType = "limit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"market" | "limit" | Unrecognized<string>
```