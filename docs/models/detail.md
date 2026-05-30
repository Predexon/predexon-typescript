# Detail

## Example Usage

```typescript
import { Detail } from "@predexon/sdk/models";

let value: Detail = {
  error: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `error`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | Short error code or title (human-readable string)                                 |
| `message`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | Longer human-readable explanation of the error. May be absent on some endpoints.<br/> |