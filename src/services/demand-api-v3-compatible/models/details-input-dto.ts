import { z } from 'zod';
import { detailsInputDtoExtras } from './details-input-dto-extras';
import { detailsInputDtoLanguages } from './details-input-dto-languages';

/**
 * The shape of the model inside the application code - what the users use
 */
export const detailsInputDto: any = z.lazy(() => {
  return z.object({
    accommodations: z.array(z.number()).min(1).max(100).optional(),
    accommodationFacilities: z.array(z.number()).optional(),
    accommodationTypes: z.array(z.number()).optional(),
    airport: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .optional(),
    brands: z.array(z.number()).optional(),
    city: z.number().optional(),
    country: z
      .string()
      .regex(/^[a-z]{2}$/)
      .optional(),
    region: z.number().optional(),
    extras: z.array(detailsInputDtoExtras).optional(),
    languages: z.array(detailsInputDtoLanguages).optional(),
    rows: z.number().lte(1000).optional(),
    page: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {DetailsInputDto} detailsInputDto   
 * @property {number[]} - A signed integer number that uniquely identifies an accommodation property.
 * @property {number[]} - A signed integer number that uniquely identifies an accommodation property facility.
Examples of facilities are: Parking, Restaurant, Room service etc.

 * @property {number[]} - A signed integer number that uniquely identifies an accommodation property type.
Examples of accommodation types are: Apartment, Hostel, Hotel etc.
 * @property {string} - A three-letter code that uniquely identifies an airport as defined by the International Air Transport Association (IATA).
 * @property {number[]} - A signed integer number that uniquely identifies an accommodation brand.
Examples of brands are: Radisson Blu, WestCord Hotels, Westin etc.

 * @property {number} - A signed integer number that uniquely identifies a city.
 * @property {string} - A two-letter code that uniquely identifies a country.
This code is defined by the ISO 3166-1 alpha-2 standard (ISO2) as described here: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

 * @property {number} - A signed integer number that uniquely identifies a geographical region.
Regions usually define official administrative areas within a country,
but may also include multiple countries and in some cases un-official but popular designations for geographical areas.
An example of a region that crosses multiple countries is the Alps in Europe.

 * @property {DetailsInputDtoExtras[]} - Input parameter to request for additional information about the accommodation property.
It should be passed as a JSON array with one or more items.

 * @property {DetailsInputDtoLanguages[]} - An IETF language tag code that uniquely identifies a supported human language or dialect as described here:
https://en.wikipedia.org/wiki/IETF_language_tag.

Note that in in demand-api-v3-compatible the whole tag is always lowercase.
Examples: "nl" for Dutch/Nederlands or "en-us" for English (US).

 * @property {number} - The maximum number of results to return.
 * @property {string} - Pagination token used to retrieve the next page of results. Obtained from `next_page`.
 */
export type DetailsInputDto = z.infer<typeof detailsInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const detailsInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      accommodations: z.array(z.number()).min(1).max(100).optional(),
      accommodation_facilities: z.array(z.number()).optional(),
      accommodation_types: z.array(z.number()).optional(),
      airport: z
        .string()
        .regex(/^[A-Z]{3}$/)
        .optional(),
      brands: z.array(z.number()).optional(),
      city: z.number().optional(),
      country: z
        .string()
        .regex(/^[a-z]{2}$/)
        .optional(),
      region: z.number().optional(),
      extras: z.array(detailsInputDtoExtras).optional(),
      languages: z.array(detailsInputDtoLanguages).optional(),
      rows: z.number().lte(1000).optional(),
      page: z.string().optional(),
    })
    .transform((data) => ({
      accommodations: data['accommodations'],
      accommodationFacilities: data['accommodation_facilities'],
      accommodationTypes: data['accommodation_types'],
      airport: data['airport'],
      brands: data['brands'],
      city: data['city'],
      country: data['country'],
      region: data['region'],
      extras: data['extras'],
      languages: data['languages'],
      rows: data['rows'],
      page: data['page'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const detailsInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      accommodations: z.array(z.number()).nullish(),
      accommodationFacilities: z.array(z.number()).nullish(),
      accommodationTypes: z.array(z.number()).nullish(),
      airport: z.string().nullish(),
      brands: z.array(z.number()).nullish(),
      city: z.number().nullish(),
      country: z.string().nullish(),
      region: z.number().nullish(),
      extras: z.array(detailsInputDtoExtras).nullish(),
      languages: z.array(detailsInputDtoLanguages).nullish(),
      rows: z.number().nullish(),
      page: z.string().nullish(),
    })
    .transform((data) => ({
      accommodations: data['accommodations'],
      accommodation_facilities: data['accommodationFacilities'],
      accommodation_types: data['accommodationTypes'],
      airport: data['airport'],
      brands: data['brands'],
      city: data['city'],
      country: data['country'],
      region: data['region'],
      extras: data['extras'],
      languages: data['languages'],
      rows: data['rows'],
      page: data['page'],
    }));
});
