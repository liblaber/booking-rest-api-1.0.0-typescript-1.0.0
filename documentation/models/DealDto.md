# DealDto

This specifies the deal tagging for the product.

**Properties**

| Name               | Type   | Required | Description |
| :----------------- | :----- | :------- | :---------- |
| discountPercentage | number | ❌       |             |
| publicPrice        | number | ❌       |             |
| tags               | Tags[] | ❌       |             |

# Tags

**Properties**

| Name              | Type   | Required | Description         |
| :---------------- | :----- | :------- | :------------------ |
| BLACK_FRIDAY      | string | ✅       | "BLACK_FRIDAY"      |
| GENIUS            | string | ✅       | "GENIUS"            |
| LIMITED_TIME_DEAL | string | ✅       | "LIMITED_TIME_DEAL" |
| LOGGED_IN_DEAL    | string | ✅       | "LOGGED_IN_DEAL"    |
| MOBILE_RATE       | string | ✅       | "MOBILE_RATE"       |
| SEASONAL_DEAL     | string | ✅       | "SEASONAL_DEAL"     |
