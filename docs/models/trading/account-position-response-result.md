# AccountPositionResponseResult

`null` while the market is still active; `won` or `lost` once resolved.

## Example Usage

```typescript
import { AccountPositionResponseResult } from "@predexon/sdk/models/trading";

let value: AccountPositionResponseResult = "won";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"won" | "lost" | Unrecognized<string>
```