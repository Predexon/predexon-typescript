# AccountOrderResponseStatus

Normalized order status across venues. `partial` means the order matched some shares but the rest is still open or terminal-cancelled.

## Example Usage

```typescript
import { AccountOrderResponseStatus } from "@predexon/sdk/models/trading";

let value: AccountOrderResponseStatus = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "filled" | "partial" | "cancelled" | "expired" | "pending" | "failed" | Unrecognized<string>
```