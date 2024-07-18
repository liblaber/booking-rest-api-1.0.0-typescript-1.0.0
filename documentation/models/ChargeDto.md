# ChargeDto

**Properties**

| Name        | Type   | Required | Description |
| :---------- | :----- | :------- | :---------- |
| charge      | number | ❌       |             |
| condition   | number | ❌       |             |
| mode        | Mode   | ❌       |             |
| percentage  | number | ❌       |             |
| totalAmount | number | ❌       |             |
| unitAmount  | number | ❌       |             |

# Mode

**Properties**

| Name                 | Type   | Required | Description            |
| :------------------- | :----- | :------- | :--------------------- |
| CALCULATED_AMOUNT    | string | ✅       | "CALCULATED_AMOUNT"    |
| INCALCULABLE         | string | ✅       | "INCALCULABLE"         |
| PERCENTAGE           | string | ✅       | "PERCENTAGE"           |
| PER_NIGHT            | string | ✅       | "PER_NIGHT"            |
| PER_PERSON_PER_NIGHT | string | ✅       | "PER_PERSON_PER_NIGHT" |
| PER_PERSON_PER_STAY  | string | ✅       | "PER_PERSON_PER_STAY"  |
| PER_STAY             | string | ✅       | "PER_STAY"             |
