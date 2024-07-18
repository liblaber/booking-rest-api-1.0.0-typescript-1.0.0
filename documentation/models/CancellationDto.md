# CancellationDto

The cancellation policy for this product.

**Properties**

| Name                  | Type   | Required | Description                                                      |
| :-------------------- | :----- | :------- | :--------------------------------------------------------------- |
| freeCancellationUntil | string | ❌       | Until when the order for this product can be cancelled for free. |
| type                  | Type\_ | ❌       | The cancellation scheme supported by this product.               |

# Type\_

The cancellation scheme supported by this product.

**Properties**

| Name               | Type   | Required | Description          |
| :----------------- | :----- | :------- | :------------------- |
| FREE_CANCELLATION  | string | ✅       | "FREE_CANCELLATION"  |
| NON_REFUNDABLE     | string | ✅       | "NON_REFUNDABLE"     |
| SPECIAL_CONDITIONS | string | ✅       | "SPECIAL_CONDITIONS" |
