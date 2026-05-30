# TimeWindow

Time window for rolling metrics.

## Example Usage

```typescript
import { TimeWindow } from "@predexon/sdk/models/data";

let value: TimeWindow = "30d";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"1d" | "7d" | "30d" | "all_time" | Unrecognized<string>
```