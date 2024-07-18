# DemandApiV2CompatibleService

A list of all methods in the `DemandApiV2CompatibleService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [getHotelsReviewScores](#gethotelsreviewscores) | Gives information about review scores for specified hotel_ids and filter. The information consists of score breakdown per reviewer_type and review questions, and overall score distribution per score value (1 - 10). The available filter is input parameter reviewer_type=... . It allows generating review score information for just one reviewer type. Language in which the response is rendered can be controlled with the input parameter language=... (default: 'en'). Setting the language will reflect on the output fields question and review_score_word. One additional output field can be requested with input parameter extras=review_score_word. |
| [getHotels](#gethotels)                         | This call returns the hotel and room data. By default, only hotel_id is returned in the output. One of the argument: hotel_ids, city_ids, country_ids, region_ids, district_ids, chain_ids is mandatory. Additional data needs to be requested via extras parameter. The data is returned in English by default.                                                                                                                                                                                                                                                                                                                                                    |
| [getHotelTypes](#gethoteltypes)                 | This endpoint returns hotel types names and their translations. (EN is default)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [getHotelThemeTypes](#gethotelthemetypes)       | This endpoint returns a list of hotel theme types (in English).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [getRoomFacilityTypes](#getroomfacilitytypes)   | This endpoint returns room facility types names and their translations (EN is default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [getHotelAvailability](#gethotelavailability)   | This endpoint returns the cheapest available room for each hotel matching your check-in and check-out dates. You can search for hotels in a city, or for a specific list of (upto 300) hotels by hotel_ids. Here you will find whether the price included breakfast or other meals, as well as whether it is possible to cancel for free. It is possible to have a breakdown of the price returned by this endpoint and to filter by property types and/or hotel facilities.                                                                                                                                                                                        |
| [getBlockAvailability](#getblockavailability)   | This endpoint is where you find a list of all bookable or available rooms at a property. A room can have multiple blocks, as a block is a combination of the meal, cancellation policy, occupancy and other things. You can find detailed information about one hotel per search (detail_level) which will return most of the information needed to replicate the booking.com property page. If you want to search multiple hotels, you can, but you get less detail. For searching multiple hotels, it is recommended to use hotelAvailability.                                                                                                                    |

## getHotelsReviewScores

Gives information about review scores for specified hotel_ids and filter. The information consists of score breakdown per reviewer_type and review questions, and overall score distribution per score value (1 - 10). The available filter is input parameter reviewer_type=... . It allows generating review score information for just one reviewer type. Language in which the response is rendered can be controlled with the input parameter language=... (default: 'en'). Setting the language will reflect on the output fields question and review_score_word. One additional output field can be requested with input parameter extras=review_score_word.

- HTTP Method: `GET`
- Endpoint: `/demand-api-v2-compatible/reviewScores`

**Parameters**

| Name                 | Type                                                                    | Required | Description |
| :------------------- | :---------------------------------------------------------------------- | :------- | :---------- |
| reviewScoresInputDto | [ReviewScoresInputDto](../models/ReviewScoresInputDto.md)               | ✅       |             |
| accept               | [GetHotelsReviewScoresAccept](../models/GetHotelsReviewScoresAccept.md) | ❌       |             |

**Return Type**

`ResponseOutputV2ReviewScoresOutputDto`

**Example Usage Code Snippet**

```typescript
import { BookingClient } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
	token: 'YOUR_TOKEN'});

  const reviewScoresInputDtoLanguage = ReviewScoresInputDtoLanguage.AR;

const reviewerType = ReviewerType.SOLO_TRAVELLER;

const reviewScoresInputDto: ReviewScoresInputDto = {
  hotelIds: [4],
  affiliateId: 6,
  language: reviewScoresInputDtoLanguage,
  reviewerType: reviewerType
};
const accept = GetHotelsReviewScoresAccept.application/json, application/xml;

  const { data } = await bookingClient.demandApiV2Compatible.getHotelsReviewScores(
  {
		reviewScoresInputDto: reviewScoresInputDto,
		accept: accept,
  }
);

  console.log(data);
})();
```

## getHotels

This call returns the hotel and room data. By default, only hotel_id is returned in the output. One of the argument: hotel_ids, city_ids, country_ids, region_ids, district_ids, chain_ids is mandatory. Additional data needs to be requested via extras parameter. The data is returned in English by default.

- HTTP Method: `GET`
- Endpoint: `/demand-api-v2-compatible/hotels`

**Parameters**

| Name        | Type                                            | Required | Description |
| :---------- | :---------------------------------------------- | :------- | :---------- |
| hotelsInput | [HotelsInputDto](../models/HotelsInputDto.md)   | ✅       |             |
| accept      | [GetHotelsAccept](../models/GetHotelsAccept.md) | ❌       |             |

**Return Type**

`ResponseOutputV2HotelsOutputDto`

**Example Usage Code Snippet**

```typescript
import { BookingClient } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
	token: 'YOUR_TOKEN'});

  const hotelsInputDtoLanguage = HotelsInputDtoLanguage.AR;

const hotelsInputDtoExtras = HotelsInputDtoExtras.HOTEL_INFO;

const hotelsInput: HotelsInputDto = {
  hotelIds: [6],
  language: hotelsInputDtoLanguage,
  extras: [hotelsInputDtoExtras],
  offset: 4,
  rows: 9
};
const accept = GetHotelsAccept.application/json, application/xml;

  const { data } = await bookingClient.demandApiV2Compatible.getHotels(
  {
		hotelsInput: hotelsInput,
		accept: accept,
  }
);

  console.log(data);
})();
```

## getHotelTypes

This endpoint returns hotel types names and their translations. (EN is default)

- HTTP Method: `GET`
- Endpoint: `/demand-api-v2-compatible/hotelTypes`

**Parameters**

| Name              | Type                                                    | Required | Description |
| :---------------- | :------------------------------------------------------ | :------- | :---------- |
| hotelTypeInputDto | [HotelTypeInputDto](../models/HotelTypeInputDto.md)     | ✅       |             |
| accept            | [GetHotelTypesAccept](../models/GetHotelTypesAccept.md) | ❌       |             |

**Return Type**

`ResponseOutputV2HotelTypesOutputDto`

**Example Usage Code Snippet**

```typescript
import { BookingClient } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
    token: 'YOUR_TOKEN',
  });

  const hotelTypeInputDtoLanguages = HotelTypeInputDtoLanguages.AR;

  const hotelTypeInputDto: HotelTypeInputDto = {
    hotelTypeIds: [5],
    languages: [hotelTypeInputDtoLanguages],
    offset: 2,
    row: 9,
  };
  const accept = GetHotelTypesAccept.application / json;

  const { data } = await bookingClient.demandApiV2Compatible.getHotelTypes({
    hotelTypeInputDto: hotelTypeInputDto,
    accept: accept,
  });

  console.log(data);
})();
```

## getHotelThemeTypes

This endpoint returns a list of hotel theme types (in English).

- HTTP Method: `GET`
- Endpoint: `/demand-api-v2-compatible/hotelThemeTypes`

**Parameters**

| Name                   | Type                                                              | Required | Description |
| :--------------------- | :---------------------------------------------------------------- | :------- | :---------- |
| hotelThemeTypeInputDto | [HotelThemeTypeInputDto](../models/HotelThemeTypeInputDto.md)     | ✅       |             |
| accept                 | [GetHotelThemeTypesAccept](../models/GetHotelThemeTypesAccept.md) | ❌       |             |

**Return Type**

`ResponseOutputV2HotelThemeTypesOutputDto`

**Example Usage Code Snippet**

```typescript
import { BookingClient } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
    token: 'YOUR_TOKEN',
  });

  const hotelThemeTypeInputDto: HotelThemeTypeInputDto = {
    themeIds: [9],
    offset: 7,
    row: 1,
  };
  const accept = GetHotelThemeTypesAccept.application / json;

  const { data } = await bookingClient.demandApiV2Compatible.getHotelThemeTypes({
    hotelThemeTypeInputDto: hotelThemeTypeInputDto,
    accept: accept,
  });

  console.log(data);
})();
```

## getRoomFacilityTypes

This endpoint returns room facility types names and their translations (EN is default).

- HTTP Method: `GET`
- Endpoint: `/demand-api-v2-compatible/hotelFacilityTypes`

**Parameters**

| Name                  | Type                                                                  | Required | Description |
| :-------------------- | :-------------------------------------------------------------------- | :------- | :---------- |
| hotelFacilityInputDto | [HotelFacilityInputDto](../models/HotelFacilityInputDto.md)           | ✅       |             |
| accept                | [GetRoomFacilityTypesAccept](../models/GetRoomFacilityTypesAccept.md) | ❌       |             |

**Return Type**

`ResponseOutputV2HotelFacilityTypeOutputDto`

**Example Usage Code Snippet**

```typescript
import { BookingClient } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
    token: 'YOUR_TOKEN',
  });

  const hotelFacilityInputDtoLanguages = HotelFacilityInputDtoLanguages.AR;

  const hotelFacilityInputDto: HotelFacilityInputDto = {
    facilityTypeIds: [1],
    hotelFacilityTypeIds: [7],
    languages: [hotelFacilityInputDtoLanguages],
  };
  const accept = GetRoomFacilityTypesAccept.application / json;

  const { data } = await bookingClient.demandApiV2Compatible.getRoomFacilityTypes({
    hotelFacilityInputDto: hotelFacilityInputDto,
    accept: accept,
  });

  console.log(data);
})();
```

## getHotelAvailability

This endpoint returns the cheapest available room for each hotel matching your check-in and check-out dates. You can search for hotels in a city, or for a specific list of (upto 300) hotels by hotel_ids. Here you will find whether the price included breakfast or other meals, as well as whether it is possible to cancel for free. It is possible to have a breakdown of the price returned by this endpoint and to filter by property types and/or hotel facilities.

- HTTP Method: `GET`
- Endpoint: `/demand-api-v2-compatible/hotelAvailability`

**Parameters**

| Name                      | Type                                                                  | Required | Description |
| :------------------------ | :-------------------------------------------------------------------- | :------- | :---------- |
| hotelAvailabilityInputDto | [HotelAvailabilityInputDto](../models/HotelAvailabilityInputDto.md)   | ✅       |             |
| accept                    | [GetHotelAvailabilityAccept](../models/GetHotelAvailabilityAccept.md) | ❌       |             |

**Return Type**

`ResponseOutputV2HotelAvailabilityOutputDto`

**Example Usage Code Snippet**

```typescript
import { BookingClient } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
    token: 'YOUR_TOKEN',
  });

  const hotelAvailabilityInputDtoUserPlatform = HotelAvailabilityInputDtoUserPlatform.ANDROID;

  const hotelAvailabilityInputDto: HotelAvailabilityInputDto = {
    checkin: 'checkin',
    checkout: 'checkout',
    hotelIds: [123],
    currency: 'currency',
    guestCountry: 'guest_country',
    noRooms: 7,
    userPlatform: hotelAvailabilityInputDtoUserPlatform,
    rows: 575,
    page: 'page',
  };
  const accept = GetHotelAvailabilityAccept.application / json;

  const { data } = await bookingClient.demandApiV2Compatible.getHotelAvailability({
    hotelAvailabilityInputDto: hotelAvailabilityInputDto,
    accept: accept,
  });

  console.log(data);
})();
```

## getBlockAvailability

This endpoint is where you find a list of all bookable or available rooms at a property. A room can have multiple blocks, as a block is a combination of the meal, cancellation policy, occupancy and other things. You can find detailed information about one hotel per search (detail_level) which will return most of the information needed to replicate the booking.com property page. If you want to search multiple hotels, you can, but you get less detail. For searching multiple hotels, it is recommended to use hotelAvailability.

- HTTP Method: `GET`
- Endpoint: `/demand-api-v2-compatible/blockAvailability`

**Parameters**

| Name       | Type                                                                  | Required | Description |
| :--------- | :-------------------------------------------------------------------- | :------- | :---------- |
| blockInput | [BlockAvailabilityInputDto](../models/BlockAvailabilityInputDto.md)   | ✅       |             |
| accept     | [GetBlockAvailabilityAccept](../models/GetBlockAvailabilityAccept.md) | ❌       |             |

**Return Type**

`ResponseOutputV2BlockAvailabilityOutputDto`

**Example Usage Code Snippet**

```typescript
import { BookingClient } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
	token: 'YOUR_TOKEN'});

  const blockAvailabilityInputDtoExtras = BlockAvailabilityInputDtoExtras.ADDON_TYPE;

const blockAvailabilityInputDtoLanguage = BlockAvailabilityInputDtoLanguage.AR;

const blockAvailabilityInputDtoUserPlatform = BlockAvailabilityInputDtoUserPlatform.ANDROID;

const blockInput: BlockAvailabilityInputDto = {
  hotelIds: [6],
  checkin: "checkin",
  checkout: "checkout",
  guestCc: "guest_cc",
  currency: "currency",
  extras: [blockAvailabilityInputDtoExtras],
  affiliateId: "affiliate_id",
  blockIds: ["5555555_55555555_5_5_5,6666666_66666666_6_6_6"],
  guestIp: "guest_ip",
  guestQty: [2],
  language: blockAvailabilityInputDtoLanguage,
  numRooms: 9,
  room1: ["room1"],
  userPlatform: blockAvailabilityInputDtoUserPlatform
};
const accept = GetBlockAvailabilityAccept.application/json, application/xml;

  const { data } = await bookingClient.demandApiV2Compatible.getBlockAvailability(
  {
		blockInput: blockInput,
		accept: accept,
  }
);

  console.log(data);
})();
```
