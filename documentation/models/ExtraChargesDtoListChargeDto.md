# ExtraChargesDtoListChargeDto

The charge breakdown. Includes taxes and fees.

**Properties**

| Name        | Type        | Required | Description                     |
| :---------- | :---------- | :------- | :------------------------------ |
| excluded    | ChargeDto[] | ❌       | Charges not included in 'book'. |
| included    | ChargeDto[] | ❌       | Charges included in 'book'.     |
| conditional | ChargeDto[] | ❌       |                                 |
