# PredictOutcome

A single tradeable outcome for a Predict.fun market.

## Example Usage

```typescript
import { PredictOutcome } from "@predexon/sdk/models/data";

let value: PredictOutcome = {
  label: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `label`            | *string*           | :heavy_check_mark: | N/A                |
| `tokenId`          | *string*           | :heavy_minus_sign: | N/A                |
| `predexonId`       | *string*           | :heavy_minus_sign: | N/A                |
| `bestBid`          | *number*           | :heavy_minus_sign: | N/A                |
| `bestAsk`          | *number*           | :heavy_minus_sign: | N/A                |