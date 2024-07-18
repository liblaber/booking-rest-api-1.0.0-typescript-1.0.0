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
import { BookerInputDto, BookingClient, Coordinates, GuestsInputDto, SearchInputDto } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
    token: 'YOUR_TOKEN',
  });

  const accept = SearchAccept.application / json;

  const platform = Platform.ANDROID;

  const travelPurpose = TravelPurpose.BUSINESS;

  const userGroups = UserGroups.AUTHENTICATED;

  const bookerInputDto: BookerInputDto = {
    country: 'bs',
    platform: platform,
    travelPurpose: travelPurpose,
    userGroups: [userGroups],
  };

  const allocationInputDto: AllocationInputDto = {
    children: [3],
    numberOfAdults: 10,
  };

  const guestsInputDto: GuestsInputDto = {
    numberOfAdults: 1,
    numberOfRooms: 8,
    allocation: [allocationInputDto],
    children: [14],
  };

  const searchInputDtoExtras = SearchInputDtoExtras.EXTRA_CHARGES;

  const coordinates: Coordinates = {
    latitude: 6.5,
    longitude: 1.32,
    radius: 7.15,
  };

  const input: SearchInputDto = {
    checkin: 'checkin',
    checkout: 'checkout',
    booker: bookerInputDto,
    currency: 'EUR',
    city: 10,
    country: 'nl',
    guests: guestsInputDto,
    extras: [searchInputDtoExtras],
    accommodations: [7],
    accommodationFacilities: [7],
    roomFacilities: [8],
    accommodationTypes: [6],
    brands: [10],
    airport: 'AMS',
    district: 2,
    landmark: 10,
    coordinates: coordinates,
    region: 9,
    rows: 211,
    page: 'page',
  };

  const { data } = await bookingClient.demandApiV3Compatible.search(input, {
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
import { BookingClient, DetailsInputDto } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
    token: 'YOUR_TOKEN',
  });

  const accept = PostDetailsAccept.application / json;

  const detailsInputDtoExtras = DetailsInputDtoExtras.DESCRIPTION;

  const detailsInputDtoLanguages = DetailsInputDtoLanguages.AR;

  const input: DetailsInputDto = {
    accommodations: [10],
    accommodationFacilities: [10],
    accommodationTypes: [10],
    airport: 'AMS',
    brands: [3],
    city: 10,
    country: 'nl',
    region: 1,
    extras: [detailsInputDtoExtras],
    languages: [detailsInputDtoLanguages],
    rows: 200,
    page: 'page',
  };

  const { data } = await bookingClient.demandApiV3Compatible.postDetails(input, {
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
import { BookingClient, ConstantInputDto } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
    token: 'YOUR_TOKEN',
  });

  const accept = GetAccommodationConstantsAccept.application / json;

  const constants = Constants.ACCOMMODATION_TYPES;

  const constantInputDtoLanguages = ConstantInputDtoLanguages.AR;

  const input: ConstantInputDto = {
    constants: [constants],
    languages: [constantInputDtoLanguages],
  };

  const { data } = await bookingClient.demandApiV3Compatible.getAccommodationConstants(input, {
    accept: accept,
  });

  console.log(data);
})();
```
