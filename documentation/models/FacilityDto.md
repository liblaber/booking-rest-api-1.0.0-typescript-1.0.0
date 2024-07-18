# FacilityDto

The list of facilities available in this property. Requires `{"extras":["facilities"]}`.

**Properties**

| Name       | Type                    | Required | Description                                                                                                                                             |
| :--------- | :---------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id         | number                  | ❌       | A signed integer number that uniquely identifies an accommodation property facility. Examples of facilities are: Parking, Restaurant, Room service etc. |
| attributes | FacilityDtoAttributes[] | ❌       | List of optional attributes for this facility.                                                                                                          |

# FacilityDtoAttributes

List of optional attributes for this facility.

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| OFFSITE | string | ✅       | "OFFSITE"   |
| PAID    | string | ✅       | "PAID"      |
