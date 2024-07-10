# DetailsInputDto

**Properties**

| Name                    | Type                       | Required | Description                                                                                                                                                                                                                                                                                                                                         |
| :---------------------- | :------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accommodations          | number[]                   | ❌       | A signed integer number that uniquely identifies an accommodation property.                                                                                                                                                                                                                                                                         |
| accommodationFacilities | number[]                   | ❌       | A signed integer number that uniquely identifies an accommodation property facility. Examples of facilities are: Parking, Restaurant, Room service etc.                                                                                                                                                                                             |
| accommodationTypes      | number[]                   | ❌       | A signed integer number that uniquely identifies an accommodation property type. Examples of accommodation types are: Apartment, Hostel, Hotel etc.                                                                                                                                                                                                 |
| airport                 | string                     | ❌       | A three-letter code that uniquely identifies an airport as defined by the International Air Transport Association (IATA).                                                                                                                                                                                                                           |
| brands                  | number[]                   | ❌       | A signed integer number that uniquely identifies an accommodation brand. Examples of brands are: Radisson Blu, WestCord Hotels, Westin etc.                                                                                                                                                                                                         |
| city                    | number                     | ❌       | A signed integer number that uniquely identifies a city.                                                                                                                                                                                                                                                                                            |
| country                 | string                     | ❌       | A two-letter code that uniquely identifies a country. This code is defined by the ISO 3166-1 alpha-2 standard (ISO2) as described here: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.                                                                                                                                                           |
| region                  | number                     | ❌       | A signed integer number that uniquely identifies a geographical region. Regions usually define official administrative areas within a country, but may also include multiple countries and in some cases un-official but popular designations for geographical areas. An example of a region that crosses multiple countries is the Alps in Europe. |
| extras                  | DetailsInputDtoExtras[]    | ❌       | Input parameter to request for additional information about the accommodation property. It should be passed as a JSON array with one or more items.                                                                                                                                                                                                 |
| languages               | DetailsInputDtoLanguages[] | ❌       | An IETF language tag code that uniquely identifies a supported human language or dialect as described here: https://en.wikipedia.org/wiki/IETF_language_tag. Note that in in demand-api-v3-compatible the whole tag is always lowercase. Examples: "nl" for Dutch/Nederlands or "en-us" for English (US).                                           |
| rows                    | number                     | ❌       | The maximum number of results to return.                                                                                                                                                                                                                                                                                                            |
| page                    | string                     | ❌       | Pagination token used to retrieve the next page of results. Obtained from `next_page`.                                                                                                                                                                                                                                                              |

# DetailsInputDtoExtras

Input parameter to request for additional information about the accommodation property. It should be passed as a JSON array with one or more items.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| DESCRIPTION | string | ✅       | "DESCRIPTION" |
| FACILITIES  | string | ✅       | "FACILITIES"  |
| PAYMENT     | string | ✅       | "PAYMENT"     |
| PHOTOS      | string | ✅       | "PHOTOS"      |
| POLICIES    | string | ✅       | "POLICIES"    |
| ROOMS       | string | ✅       | "ROOMS"       |

# DetailsInputDtoLanguages

An IETF language tag code that uniquely identifies a supported human language or dialect as described here: https://en.wikipedia.org/wiki/IETF_language_tag. Note that in in demand-api-v3-compatible the whole tag is always lowercase. Examples: "nl" for Dutch/Nederlands or "en-us" for English (US).

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

<!-- This file was generated by liblab | https://liblab.com/ -->
