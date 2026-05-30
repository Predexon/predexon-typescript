# RouterOrderSummary

Aggregate stats across `fills[]`. Embeds the partial/cancelled accounting logic so partners don't have to re-derive it.

## Example Usage

```typescript
import { RouterOrderSummary } from "@predexon/sdk/models/trading";

let value: RouterOrderSummary = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `totalSize`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | Sum of filled shares across legs (6-decimal).                                              |
| `totalAmount`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | Sum of money moved across legs (6-decimal).                                                |
| `avgPrice`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | Size-weighted average execution price (6-decimal). `0` when no legs filled.                |
| `venuesUsed`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | Count of legs that moved the user's position (filled, partial, or cancelled-with-partial). |
| `venuesFailed`                                                                             | *number*                                                                                   | :heavy_minus_sign:                                                                         | Count of legs that failed or cancelled with zero fill.                                     |