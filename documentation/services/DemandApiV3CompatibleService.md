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
    country: 're',
    platform: platform,
    travelPurpose: travelPurpose,
    userGroups: [userGroups],
  };

  const allocationInputDto: AllocationInputDto = {
    children: [5],
    numberOfAdults: 9,
  };

  const guestsInputDto: GuestsInputDto = {
    numberOfAdults: 4,
    numberOfRooms: 8,
    allocation: [allocationInputDto],
    children: [16],
  };

  const searchInputDtoExtras = SearchInputDtoExtras.EXTRA_CHARGES;

  const coordinates: Coordinates = {
    latitude: 4.04,
    longitude: 5.18,
    radius: 7.55,
  };

  const input: SearchInputDto = {
    checkin: 'checkin',
    checkout: 'checkout',
    booker: bookerInputDto,
    currency: 'EUR',
    city: 6,
    country: 'nl',
    guests: guestsInputDto,
    extras: [searchInputDtoExtras],
    accommodations: [9],
    accommodationFacilities: [4],
    roomFacilities: [6],
    accommodationTypes: [5],
    brands: [5],
    airport: 'AMS',
    district: 8,
    landmark: 8,
    coordinates: coordinates,
    region: 4,
    rows: 294,
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
    accommodations: [1],
    accommodationFacilities: [3],
    accommodationTypes: [5],
    airport: 'AMS',
    brands: [9],
    city: 9,
    country: 'nl',
    region: 10,
    extras: [detailsInputDtoExtras],
    languages: [detailsInputDtoLanguages],
    rows: 857,
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

<!-- This file was generated by liblab | https://liblab.com/ -->
