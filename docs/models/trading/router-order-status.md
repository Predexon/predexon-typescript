# RouterOrderStatus

Roll-up across legs. `failed` when every dispatched leg returned a terminal failure (no fills, no opens); `partial` whenever any leg filled or partial-filled while at least one leg is still open or another mix produced movement; `filled` when every leg filled; `cancelled` when all legs cancelled with no fills; `open` while at least one leg is still resting. Per-leg failure reasons are on `fills[].error`.

## Example Usage

```typescript
import { RouterOrderStatus } from "@predexon/sdk/models/trading";

let value: RouterOrderStatus = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "partial" | "filled" | "cancelled" | "failed" | Unrecognized<string>
```