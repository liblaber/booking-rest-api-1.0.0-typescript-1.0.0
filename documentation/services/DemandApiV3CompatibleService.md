# DemandApiV3CompatibleService

A list of all methods in the `DemandApiV3CompatibleService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search)                                       | This endpoint returns the cheapest available product for each hotel matching the search criteria.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [postDetails](#postdetails)                             | This endpoint returns detailed information on all accommodation properties matching a given search criteria. By default, only basic information is returned. To receive extended information use the `extras` parameter. Is is mandatory to pass one of the input parameters: accommodations, airport, city, country or region.                                                                                                                                                                                                                                                    |
| [getAccommodationConstants](#getaccommodationconstants) | This endpoint enumerates the internal codes and names, in the selected languages, for relevant accommodation specific types. These accommodation specific types include the list of facilities that may be available at a property like "Elevator" or "Swimmingpool Outdoor". For example, the following parameters will return the full list in English (US) and French: `{"languages":"en-us","fr"}`. To get the full list call the endpoint passing an empty body. The codes returned are what is used as input and output for other endpoints in the accommodations namespace. |

## search

This endpoint returns the cheapest available product for each hotel matching the search criteria.

- HTTP Method: `POST`
- Endpoint: `/demand-api-v3-compatible/search`

**Parameters**

| Name   | Type                                          | Required | Description       |
| :----- | :-------------------------------------------- | :------- | :---------------- |
| body   | [SearchInputDto](../models/SearchInputDto.md) | ✅       | The request body. |
| accept | [SearchAccept](../models/SearchAccept.md)     | ❌       |                   |

**Return Type**

`ResponseOutputListSearchOutputDto`

**Example Usage Code Snippet**

```typescript
import { BookerInputDto, Booking, Coordinates, GuestsInputDto, SearchInputDto } from 'booking';

(async () => {
  const booking = new Booking({
    token: 'YOUR_TOKEN',
  });

  const accept = SearchAccept.application / json;

  const platform = Platform.ANDROID;

  const travelPurpose = TravelPurpose.BUSINESS;

  const userGroups = UserGroups.AUTHENTICATED;

  const bookerInputDto: BookerInputDto = {
    country: 'gv',
    platform: platform,
    travelPurpose: travelPurpose,
    userGroups: [userGroups],
  };

  const allocationInputDto: AllocationInputDto = {
    children: [11],
    numberOfAdults: 7,
  };

  const guestsInputDto: GuestsInputDto = {
    numberOfAdults: 2,
    numberOfRooms: 3,
    allocation: [allocationInputDto],
    children: [3],
  };

  const searchInputDtoExtras = SearchInputDtoExtras.EXTRA_CHARGES;

  const coordinates: Coordinates = {
    latitude: 7.91,
    longitude: 8.76,
    radius: 4.68,
  };

  const input: SearchInputDto = {
    checkin: 'checkin',
    checkout: 'checkout',
    booker: bookerInputDto,
    currency: 'EUR',
    city: 8,
    country: 'nl',
    guests: guestsInputDto,
    extras: [searchInputDtoExtras],
    accommodations: [2],
    accommodationFacilities: [8],
    roomFacilities: [1],
    accommodationTypes: [3],
    brands: [8],
    airport: 'AMS',
    district: 4,
    landmark: 7,
    coordinates: coordinates,
    region: 9,
    rows: 875,
    page: 'page',
  };

  const { data } = await booking.demandApiV3Compatible.search(input, {
    accept: accept,
  });

  console.log(data);
})();
```

## postDetails

This endpoint returns detailed information on all accommodation properties matching a given search criteria. By default, only basic information is returned. To receive extended information use the `extras` parameter. Is is mandatory to pass one of the input parameters: accommodations, airport, city, country or region.

- HTTP Method: `POST`
- Endpoint: `/demand-api-v3-compatible/details`

**Parameters**

| Name   | Type                                                | Required | Description       |
| :----- | :-------------------------------------------------- | :------- | :---------------- |
| body   | [DetailsInputDto](../models/DetailsInputDto.md)     | ✅       | The request body. |
| accept | [PostDetailsAccept](../models/PostDetailsAccept.md) | ❌       |                   |

**Return Type**

`ResponseOutputListDetailsOutputDto`

**Example Usage Code Snippet**

```typescript
import { Booking, DetailsInputDto } from 'booking';

(async () => {
  const booking = new Booking({
    token: 'YOUR_TOKEN',
  });

  const accept = PostDetailsAccept.application / json;

  const detailsInputDtoExtras = DetailsInputDtoExtras.DESCRIPTION;

  const detailsInputDtoLanguages = DetailsInputDtoLanguages.AR;

  const input: DetailsInputDto = {
    accommodations: [3],
    accommodationFacilities: [1],
    accommodationTypes: [5],
    airport: 'AMS',
    brands: [4],
    city: 2,
    country: 'nl',
    region: 2,
    extras: [detailsInputDtoExtras],
    languages: [detailsInputDtoLanguages],
    rows: 606,
    page: 'page',
  };

  const { data } = await booking.demandApiV3Compatible.postDetails(input, {
    accept: accept,
  });

  console.log(data);
})();
```

## getAccommodationConstants

This endpoint enumerates the internal codes and names, in the selected languages, for relevant accommodation specific types. These accommodation specific types include the list of facilities that may be available at a property like "Elevator" or "Swimmingpool Outdoor". For example, the following parameters will return the full list in English (US) and French: `{"languages":"en-us","fr"}`. To get the full list call the endpoint passing an empty body. The codes returned are what is used as input and output for other endpoints in the accommodations namespace.

- HTTP Method: `POST`
- Endpoint: `/demand-api-v3-compatible/constants`

**Parameters**

| Name   | Type                                                                            | Required | Description       |
| :----- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body   | [ConstantInputDto](../models/ConstantInputDto.md)                               | ❌       | The request body. |
| accept | [GetAccommodationConstantsAccept](../models/GetAccommodationConstantsAccept.md) | ❌       |                   |

**Return Type**

`ResponseOutputConstantsOutputDto`

**Example Usage Code Snippet**

```typescript
import { Booking, ConstantInputDto } from 'booking';

(async () => {
  const booking = new Booking({
    token: 'YOUR_TOKEN',
  });

  const accept = GetAccommodationConstantsAccept.application / json;

  const constants = Constants.ACCOMMODATION_TYPES;

  const constantInputDtoLanguages = ConstantInputDtoLanguages.AR;

  const input: ConstantInputDto = {
    constants: [constants],
    languages: [constantInputDtoLanguages],
  };

  const { data } = await booking.demandApiV3Compatible.getAccommodationConstants(input, {
    accept: accept,
  });

  console.log(data);
})();
```
