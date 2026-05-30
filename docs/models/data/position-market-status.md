# PositionMarketStatus

Market status for a position.

## Example Usage

```typescript
import { PositionMarketStatus } from "@predexon/sdk/models/data";

let value: PositionMarketStatus = "open";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "resolved_win" | "resolved_loss" | Unrecognized<string>
```