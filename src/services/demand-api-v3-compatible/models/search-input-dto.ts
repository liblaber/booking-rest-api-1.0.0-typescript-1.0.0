import { z } from 'zod';
import { bookerInputDto, bookerInputDtoRequest, bookerInputDtoResponse } from './booker-input-dto';
import { guestsInputDto, guestsInputDtoRequest, guestsInputDtoResponse } from './guests-input-dto';
import { searchInputDtoExtras } from './search-input-dto-extras';
import { coordinates, coordinatesRequest, coordinatesResponse } from './coordinates';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchInputDto: any = z.lazy(() => {
  return z.object({
    checkin: z.string(),
    checkout: z.string(),
    booker: bookerInputDto,
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .optional(),
    city: z.number().optional(),
    country: z
      .string()
      .regex(/^[a-z]{2}$/)
      .optional(),
    guests: guestsInputDto,
    extras: z.array(searchInputDtoExtras).optional(),
    accommodations: z.array(z.number()).max(100).optional(),
    accommodationFacilities: z.array(z.number()).optional(),
    roomFacilities: z.array(z.number()).optional(),
    accommodationTypes: z.array(z.number()).optional(),
    brands: z.array(z.number()).optional(),
    airport: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .optional(),
    district: z.number().optional(),
    landmark: z.number().optional(),
    coordinates: coordinates.optional(),
    region: z.number().optional(),
    rows: z.number().lte(1000).optional(),
    page: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {SearchInputDto} searchInputDto   
 * @property {string} - The checkin date. Must be within 500 days in the future and in the format yyyy-mm-dd.
 * @property {string} - The checkout date. Must be later than (checkin). Must be between 1 and 90 days after (checkin).
Must be within 500 days in the future and in the format yyyy-mm-dd.

 * @property {BookerInputDto} - The booker's information.
 * @property {string} - A three-letter code that uniquely identifies a monetary currency as defined by the ISO 4217 standard.
 * @property {number} - A signed integer number that uniquely identifies a city. 
 * @property {string} - A two-letter code that uniquely identifies a country.
This code is defined by the ISO 3166-1 alpha-2 standard (ISO2) as described here: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

 * @property {GuestsInputDto} - The guest details for the request.
 * @property {SearchInputDtoExtras[]} - Input parameter to request for additional information about the products.
 * @property {number[]} - A signed integer number that uniquely identifies an accommodation property.
 * @property {number[]} - A signed integer number that uniquely identifies an accommodation facility.
 * @property {number[]} - A signed integer number that uniquely identifies a room facility.
 * @property {number[]} - A signed integer number that uniquely identifies an accommodation type.
 * @property {number[]} - A signed integer number that uniquely identifies a brand.
 * @property {string} - A three-letter code that uniquely identifies an airport as defined by the International Air Transport Association (IATA).
 * @property {number} - A signed integer number that uniquely identifies a district. Typically, districts define known areas within a city.
 * @property {number} - A signed integer number that uniquely identifies a relevant geographical landmark, like a monument or a natural attraction.
 * @property {Coordinates} - Limit the result list to the specified coordinates.
 * @property {number} - A signed integer number that uniquely identifies a geographical region.
Regions usually define official administrative areas within a country,
but may also include multiple countries and in some cases un-official but popular designations for geographical areas.
An example of a region that crosses multiple countries is the Alps in Europe.

 * @property {number} - The maximum number of results to return.
 * @property {string} - Pagination token used to retrieve the next page of results. Obtained from `next_page`.
 */
export type SearchInputDto = z.infer<typeof searchInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      checkin: z.string(),
      checkout: z.string(),
      booker: bookerInputDtoResponse,
      currency: z
        .string()
        .regex(/^[A-Z]{3}$/)
        .optional(),
      city: z.number().optional(),
      country: z
        .string()
        .regex(/^[a-z]{2}$/)
        .optional(),
      guests: guestsInputDtoResponse,
      extras: z.array(searchInputDtoExtras).optional(),
      accommodations: z.array(z.number()).max(100).optional(),
      accommodation_facilities: z.array(z.number()).optional(),
      room_facilities: z.array(z.number()).optional(),
      accommodation_types: z.array(z.number()).optional(),
      brands: z.array(z.number()).optional(),
      airport: z
        .string()
        .regex(/^[A-Z]{3}$/)
        .optional(),
      district: z.number().optional(),
      landmark: z.number().optional(),
      coordinates: coordinatesResponse.optional(),
      region: z.number().optional(),
      rows: z.number().lte(1000).optional(),
      page: z.string().optional(),
    })
    .transform((data) => ({
      checkin: data['checkin'],
      checkout: data['checkout'],
      booker: data['booker'],
      currency: data['currency'],
      city: data['city'],
      country: data['country'],
      guests: data['guests'],
      extras: data['extras'],
      accommodations: data['accommodations'],
      accommodationFacilities: data['accommodation_facilities'],
      roomFacilities: data['room_facilities'],
      accommodationTypes: data['accommodation_types'],
      brands: data['brands'],
      airport: data['airport'],
      district: data['district'],
      landmark: data['landmark'],
      coordinates: data['coordinates'],
      region: data['region'],
      rows: data['rows'],
      page: data['page'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      checkin: z.string().nullish(),
      checkout: z.string().nullish(),
      booker: bookerInputDtoRequest.nullish(),
      currency: z.string().nullish(),
      city: z.number().nullish(),
      country: z.string().nullish(),
      guests: guestsInputDtoRequest.nullish(),
      extras: z.array(searchInputDtoExtras).nullish(),
      accommodations: z.array(z.number()).nullish(),
      accommodationFacilities: z.array(z.number()).nullish(),
      roomFacilities: z.array(z.number()).nullish(),
      accommodationTypes: z.array(z.number()).nullish(),
      brands: z.array(z.number()).nullish(),
      airport: z.string().nullish(),
      district: z.number().nullish(),
      landmark: z.number().nullish(),
      coordinates: coordinatesRequest.nullish(),
      region: z.number().nullish(),
      rows: z.number().nullish(),
      page: z.string().nullish(),
    })
    .transform((data) => ({
      checkin: data['checkin'],
      checkout: data['checkout'],
      booker: data['booker'],
      currency: data['currency'],
      city: data['city'],
      country: data['country'],
      guests: data['guests'],
      extras: data['extras'],
      accommodations: data['accommodations'],
      accommodation_facilities: data['accommodationFacilities'],
      room_facilities: data['roomFacilities'],
      accommodation_types: data['accommodationTypes'],
      brands: data['brands'],
      airport: data['airport'],
      district: data['district'],
      landmark: data['landmark'],
      coordinates: data['coordinates'],
      region: data['region'],
      rows: data['rows'],
      page: data['page'],
    }));
});
