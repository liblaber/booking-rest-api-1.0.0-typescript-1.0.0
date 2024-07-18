import { z } from 'zod';
import { hotelsInputDtoLanguage } from './hotels-input-dto-language';
import { hotelsInputDtoExtras } from './hotels-input-dto-extras';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelsInputDto: any = z.lazy(() => {
  return z.object({
    hotelIds: z.array(z.number()).optional(),
    language: hotelsInputDtoLanguage.optional(),
    extras: z.array(hotelsInputDtoExtras).optional(),
    offset: z.number().optional(),
    rows: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {HotelsInputDto} hotelsInputDto   
 * @property {number[]} - A list of up to 1000 hotel ids.
 * @property {HotelsInputDtoLanguage} - The language code to return the results in.
Please check the "Possible Values" section of the documentation for the accepted language codes.

 * @property {HotelsInputDtoExtras[]} - Returns extra bits of information about hotels.
 * @property {number} - The number of rows to offset the results by. NOTE: this needs to be 0 or a multiple of 100.
 * @property {number} - The maximum number of rows to return. NOTE: this needs to be a multiple of 100.
 */
export type HotelsInputDto = z.infer<typeof hotelsInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelsInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      hotel_ids: z.array(z.number()).optional(),
      language: hotelsInputDtoLanguage.optional(),
      extras: z.array(hotelsInputDtoExtras).optional(),
      offset: z.number().optional(),
      rows: z.number().optional(),
    })
    .transform((data) => ({
      hotelIds: data['hotel_ids'],
      language: data['language'],
      extras: data['extras'],
      offset: data['offset'],
      rows: data['rows'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelsInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      hotelIds: z.array(z.number()).nullish(),
      language: hotelsInputDtoLanguage.nullish(),
      extras: z.array(hotelsInputDtoExtras).nullish(),
      offset: z.number().nullish(),
      rows: z.number().nullish(),
    })
    .transform((data) => ({
      hotel_ids: data['hotelIds'],
      language: data['language'],
      extras: data['extras'],
      offset: data['offset'],
      rows: data['rows'],
    }));
});
