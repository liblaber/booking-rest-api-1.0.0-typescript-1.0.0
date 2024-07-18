import { z } from 'zod';
import {
  lazyTranslatedString,
  lazyTranslatedStringRequest,
  lazyTranslatedStringResponse,
} from './lazy-translated-string';
import { coordinatesDto, coordinatesDtoRequest, coordinatesDtoResponse } from '../../common/coordinates-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const locationDto: any = z.lazy(() => {
  return z.object({
    address: lazyTranslatedString.optional(),
    city: z.number().optional(),
    coordinates: coordinatesDto.optional(),
    country: z.string().optional(),
    districts: z.array(z.number()).optional(),
    postalCode: z.string().optional(),
    regions: z.array(z.number()).optional(),
  });
});

/**
 * All location related information of this accommodation property.
 * @typedef  {LocationDto} locationDto - All location related information of this accommodation property. - All location related information of this accommodation property.
 * @property {LazyTranslatedString} - Translated accommodation address.
 * @property {number} - A signed integer number that uniquely identifies a city.
 * @property {CoordinatesDto} - A signed integer number that uniquely identifies a city.
 * @property {string} - A two-letter code that uniquely identifies a country.
This code is defined by the ISO 3166-1 alpha-2 standard (ISO2) as described here: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

 * @property {number[]} - A signed integer number that uniquely identifies a district. Typically, districts define known areas within a city.
 * @property {string} 
 * @property {number[]} - A signed integer number that uniquely identifies a geographical region.
Regions usually define official administrative areas within a country,
but may also include multiple countries and in some cases un-official but popular designations for geographical areas.
An example of a region that crosses multiple countries is the Alps in Europe.

 */
export type LocationDto = z.infer<typeof locationDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const locationDtoResponse: any = z.lazy(() => {
  return z
    .object({
      address: lazyTranslatedStringResponse.optional(),
      city: z.number().optional(),
      coordinates: coordinatesDtoResponse.optional(),
      country: z.string().optional(),
      districts: z.array(z.number()).optional(),
      postal_code: z.string().optional(),
      regions: z.array(z.number()).optional(),
    })
    .transform((data) => ({
      address: data['address'],
      city: data['city'],
      coordinates: data['coordinates'],
      country: data['country'],
      districts: data['districts'],
      postalCode: data['postal_code'],
      regions: data['regions'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const locationDtoRequest: any = z.lazy(() => {
  return z
    .object({
      address: lazyTranslatedStringRequest.nullish(),
      city: z.number().nullish(),
      coordinates: coordinatesDtoRequest.nullish(),
      country: z.string().nullish(),
      districts: z.array(z.number()).nullish(),
      postalCode: z.string().nullish(),
      regions: z.array(z.number()).nullish(),
    })
    .transform((data) => ({
      address: data['address'],
      city: data['city'],
      coordinates: data['coordinates'],
      country: data['country'],
      districts: data['districts'],
      postal_code: data['postalCode'],
      regions: data['regions'],
    }));
});
