import { z } from 'zod';
import { hotelAvailabilityInputDtoUserPlatform } from './hotel-availability-input-dto-user-platform';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelAvailabilityInputDto: any = z.lazy(() => {
  return z.object({
    checkin: z.string(),
    checkout: z.string(),
    hotelIds: z.array(z.number()).max(100).optional(),
    currency: z.string().optional(),
    guestCountry: z.string(),
    noRooms: z.number(),
    userPlatform: hotelAvailabilityInputDtoUserPlatform.optional(),
    rows: z.number().lte(1000).optional(),
    page: z.string().optional(),
  });
});

/**
 *
 * @typedef  {HotelAvailabilityInputDto} hotelAvailabilityInputDto
 * @property {string} - The arrival date.
 * @property {string} - The departure date. Must be later than (checkin). Must be between 1 and 30 days after (checkin).
 * @property {number[]} - Limit the result list to up to 1000 specified hotels where they have availability for the specified guests and dates.
 * @property {string} - Returns the price in this currency
 * @property {string} - Guest country code. Used to accurately display the best prices and price details for people from that country.
 * @property {number} - The only group will be split in the given number of rooms automatically
 * @property {HotelAvailabilityInputDtoUserPlatform} - The user's platform.
 * @property {number} - The maximum number of results to return.
 * @property {string} - Pagination token used to retrieve the next page of results. Obtained from `next_page`.
 */
export type HotelAvailabilityInputDto = z.infer<typeof hotelAvailabilityInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelAvailabilityInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      checkin: z.string(),
      checkout: z.string(),
      hotel_ids: z.array(z.number()).max(100).optional(),
      currency: z.string().optional(),
      guest_country: z.string(),
      no_rooms: z.number(),
      user_platform: hotelAvailabilityInputDtoUserPlatform.optional(),
      rows: z.number().lte(1000).optional(),
      page: z.string().optional(),
    })
    .transform((data) => ({
      checkin: data['checkin'],
      checkout: data['checkout'],
      hotelIds: data['hotel_ids'],
      currency: data['currency'],
      guestCountry: data['guest_country'],
      noRooms: data['no_rooms'],
      userPlatform: data['user_platform'],
      rows: data['rows'],
      page: data['page'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelAvailabilityInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      checkin: z.string().nullish(),
      checkout: z.string().nullish(),
      hotelIds: z.array(z.number()).nullish(),
      currency: z.string().nullish(),
      guestCountry: z.string().nullish(),
      noRooms: z.number().nullish(),
      userPlatform: hotelAvailabilityInputDtoUserPlatform.nullish(),
      rows: z.number().nullish(),
      page: z.string().nullish(),
    })
    .transform((data) => ({
      checkin: data['checkin'],
      checkout: data['checkout'],
      hotel_ids: data['hotelIds'],
      currency: data['currency'],
      guest_country: data['guestCountry'],
      no_rooms: data['noRooms'],
      user_platform: data['userPlatform'],
      rows: data['rows'],
      page: data['page'],
    }));
});
