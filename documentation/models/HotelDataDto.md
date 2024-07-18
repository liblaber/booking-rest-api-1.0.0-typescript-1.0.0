# HotelDataDto

Hotel specific information.

**Properties**

| Name                 | Type                    | Required | Description                                              |
| :------------------- | :---------------------- | :------- | :------------------------------------------------------- |
| address              | string                  | ❌       | The street address of the hotel.                         |
| cityId               | number                  | ❌       | Id of the city where this property is located.           |
| country              | string                  | ❌       | Two-letter ISO country code of the hotel.                |
| location             | CoordinatesDto          | ❌       | A signed integer number that uniquely identifies a city. |
| zip                  | string                  | ❌       | Hotel ZIP code                                           |
| currency             | string                  | ❌       | Three-letter ISO currency code for the hotel.            |
| checkinCheckoutTimes | CheckinCheckoutTimesDto | ❌       |                                                          |
| hotelPhotos          | HotelPhotoDto[]         | ❌       | Photos specific information of the hotel.                |
| hotelDescription     | string                  | ❌       | The description text for this hotel.                     |
| url                  | string                  | ❌       | URL of the hotel's page on Booking.com.                  |
| deepLinkUrl          | string                  | ❌       | Deep link mobile app URL.                                |
| regionIds            | number[]                | ❌       | List of region_ids that the hotel belongs to             |
| numberOfReviews      | number                  | ❌       | Number of reviews for this hotel.                        |
| reviewScore          | number                  | ❌       | Review score of this hotel.                              |
| spokenLanguages      | string[]                | ❌       | Languages spoken by the hotel's staff                    |
