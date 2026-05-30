# MarketFilterLogic

Logic for combining market filters.

## Example Usage

```typescript
import { MarketFilterLogic } from "@predexon/sdk/models/data";

let value: MarketFilterLogic = "or";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"and" | "or" | Unrecognized<string>
```