# FillStatus

## Example Usage

```typescript
import { FillStatus } from "@predexon/sdk/models/trading";

let value: FillStatus = "filled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "partial" | "filled" | "cancelled" | "failed" | Unrecognized<string>
```