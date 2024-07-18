# BlockAvailabilityInputDto

**Properties**

| Name         | Type                                  | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :----------- | :------------------------------------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hotelIds     | number[]                              | ✅       | Hotel ID(s) to check availability for.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| checkin      | string                                | ✅       | The arrival date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| checkout     | string                                | ✅       | The departure date. Must be later than (checkin).                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| guestCc      | string                                | ✅       | Guest country code. Used to accurately display the best prices and price details for people from that country.                                                                                                                                                                                                                                                                                                                                                                                                   |
| currency     | string                                | ❌       | Returns the prices in this currency, in addition to the hotel currency.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| extras       | BlockAvailabilityInputDtoExtras[]     | ❌       | The extra items for this request. See the documentation for more details about each extra.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| affiliateId  | string                                | ❌       | Application affiliate id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| blockIds     | string[]                              | ❌       | Return only availability hits with these particular block IDs                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| guestIp      | string                                | ❌       | Guest IP address for determining guest country and showing the best price for that user and obeying laws regarding the display of taxes and fees.                                                                                                                                                                                                                                                                                                                                                                |
| guestQty     | number[]                              | ❌       | Number of guests for which blocks will be found. The total number of guests is used for calculating city tax charges. It is specified as an array of guest numbers. If you use this parameter and make bookings through the API, you should also set the exact same value in the guest_quantities parameter for the processBooking call, otherwise per-person included charges may result in pricing problems, causing the booking to fail. NOTE: After version 2.6 either this or `room1` needs to be provided. |
| language     | BlockAvailabilityInputDtoLanguage     | ❌       | Specify the language for: block_id, policies, room texts and hotel descriptions. Note: not all text is translated in all languages. Please check the "Possible Values" section of the documentation for the accepted language codes.                                                                                                                                                                                                                                                                             |
| numRooms     | number                                | ❌       | Takes a number of rooms to put guests into                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| room1        | string[]                              | ❌       | Which guests to put in which rooms. Syntax: comma-separated list, `A` for each adult, a number in the range 0..17 for each child.                                                                                                                                                                                                                                                                                                                                                                                |
| userPlatform | BlockAvailabilityInputDtoUserPlatform | ❌       | The user's platform.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

# BlockAvailabilityInputDtoExtras

The extra items for this request. See the documentation for more details about each extra.

**Properties**

| Name                     | Type   | Required | Description                |
| :----------------------- | :----- | :------- | :------------------------- |
| ADDON_TYPE               | string | ✅       | "ADDON_TYPE"               |
| NET_PRICE                | string | ✅       | "NET_PRICE"                |
| RACK_RATES               | string | ✅       | "RACK_RATES"               |
| MAX_ROOMS_IN_RESERVATION | string | ✅       | "MAX_ROOMS_IN_RESERVATION" |
| SMOKING_STATUS           | string | ✅       | "SMOKING_STATUS"           |
| IMPORTANT_INFORMATION    | string | ✅       | "IMPORTANT_INFORMATION"    |
| ALL_EXTRA_CHARGES        | string | ✅       | "ALL_EXTRA_CHARGES"        |
| ADDITIONAL_ROOM_INFO     | string | ✅       | "ADDITIONAL_ROOM_INFO"     |
| GROUP_RECOMMENDATIONS    | string | ✅       | "GROUP_RECOMMENDATIONS"    |
| ROOM_TYPE_ID             | string | ✅       | "ROOM_TYPE_ID"             |
| CC_REQUIRED              | string | ✅       | "CC_REQUIRED"              |
| SHOW_CONDITIONAL_CHARGES | string | ✅       | "SHOW_CONDITIONAL_CHARGES" |
| POSTCARD_PHOTO           | string | ✅       | "POSTCARD_PHOTO"           |
| EXTRA_CHARGES            | string | ✅       | "EXTRA_CHARGES"            |
| PHOTOS                   | string | ✅       | "PHOTOS"                   |
| INTERNET                 | string | ✅       | "INTERNET"                 |
| IF_DOMESTIC_NO_CC        | string | ✅       | "IF_DOMESTIC_NO_CC"        |
| FACILITIES               | string | ✅       | "FACILITIES"               |
| EXTRA_BEDS               | string | ✅       | "EXTRA_BEDS"               |
| CANCELLATION_INFO        | string | ✅       | "CANCELLATION_INFO"        |
| MEALPLANS                | string | ✅       | "MEALPLANS"                |
| DEAL_LASTM               | string | ✅       | "DEAL_LASTM"               |
| PAYMENT_TERMS            | string | ✅       | "PAYMENT_TERMS"            |
| ALL_PRICES               | string | ✅       | "ALL_PRICES"               |
| BLOCK_PAYMENT_OPTIONS    | string | ✅       | "BLOCK_PAYMENT_OPTIONS"    |
| MAX_CHILDREN_FREE_AGE    | string | ✅       | "MAX_CHILDREN_FREE_AGE"    |
| NUMBER_OF_ROOMS_LEFT     | string | ✅       | "NUMBER_OF_ROOMS_LEFT"     |
| MAX_CHILDREN_FREE        | string | ✅       | "MAX_CHILDREN_FREE"        |
| POLICIES                 | string | ✅       | "POLICIES"                 |
| PREPAYMENT_INFO          | string | ✅       | "PREPAYMENT_INFO"          |
| DEAL_FLASH               | string | ✅       | "DEAL_FLASH"               |
| IF_NO_CC_ALLOWED         | string | ✅       | "IF_NO_CC_ALLOWED"         |
| DEAL_SMART               | string | ✅       | "DEAL_SMART"               |
| ADDONS                   | string | ✅       | "ADDONS"                   |
| ADDRESS_REQUIRED         | string | ✅       | "ADDRESS_REQUIRED"         |

# BlockAvailabilityInputDtoLanguage

Specify the language for: block_id, policies, room texts and hotel descriptions. Note: not all text is translated in all languages. Please check the "Possible Values" section of the documentation for the accepted language codes.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| AR    | string | ✅       | "AR"        |
| BG    | string | ✅       | "BG"        |
| CA    | string | ✅       | "CA"        |
| CS    | string | ✅       | "CS"        |
| DA    | string | ✅       | "DA"        |
| DE    | string | ✅       | "DE"        |
| EL    | string | ✅       | "EL"        |
| EN    | string | ✅       | "EN"        |
| EN_GB | string | ✅       | "EN_GB"     |
| EN_US | string | ✅       | "EN_US"     |
| ES    | string | ✅       | "ES"        |
| ES_AR | string | ✅       | "ES_AR"     |
| ES_MX | string | ✅       | "ES_MX"     |
| ET    | string | ✅       | "ET"        |
| FI    | string | ✅       | "FI"        |
| FR    | string | ✅       | "FR"        |
| HE    | string | ✅       | "HE"        |
| HI    | string | ✅       | "HI"        |
| HR    | string | ✅       | "HR"        |
| HU    | string | ✅       | "HU"        |
| ID    | string | ✅       | "ID"        |
| IS    | string | ✅       | "IS"        |
| IT    | string | ✅       | "IT"        |
| JA    | string | ✅       | "JA"        |
| KA    | string | ✅       | "KA"        |
| KO    | string | ✅       | "KO"        |
| LT    | string | ✅       | "LT"        |
| LV    | string | ✅       | "LV"        |
| MS    | string | ✅       | "MS"        |
| NL    | string | ✅       | "NL"        |
| NO    | string | ✅       | "NO"        |
| PL    | string | ✅       | "PL"        |
| PT_BR | string | ✅       | "PT_BR"     |
| PT_PT | string | ✅       | "PT_PT"     |
| RO    | string | ✅       | "RO"        |
| RU    | string | ✅       | "RU"        |
| SK    | string | ✅       | "SK"        |
| SL    | string | ✅       | "SL"        |
| SR    | string | ✅       | "SR"        |
| SV    | string | ✅       | "SV"        |
| TH    | string | ✅       | "TH"        |
| TL    | string | ✅       | "TL"        |
| TR    | string | ✅       | "TR"        |
| UK    | string | ✅       | "UK"        |
| VI    | string | ✅       | "VI"        |
| ZH_CN | string | ✅       | "ZH_CN"     |
| ZH_TW | string | ✅       | "ZH_TW"     |

# BlockAvailabilityInputDtoUserPlatform

The user's platform.

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| ANDROID | string | ✅       | "ANDROID"   |
| DESKTOP | string | ✅       | "DESKTOP"   |
| IOS     | string | ✅       | "IOS"       |
| MOBILE  | string | ✅       | "MOBILE"    |
| TABLET  | string | ✅       | "TABLET"    |
