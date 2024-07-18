import { z } from 'zod';
import { hotelTypeInputDtoLanguages } from './hotel-type-input-dto-languages';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelTypeInputDto: any = z.lazy(() => {
  return z.object({
    hotelTypeIds: z.array(z.number()).optional(),
    languages: z.array(hotelTypeInputDtoLanguages).optional(),
    offset: z.number().optional(),
    row: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {HotelTypeInputDto} hotelTypeInputDto   
 * @property {number[]} - Limit the results to these hotel types.
 * @property {HotelTypeInputDtoLanguages[]} - Limit the results to these languages.
Please check the "Possible Values" section of the documentation for the accepted language codes.

 * @property {number} - The number of rows to offset the results by. NOTE: this needs to be 0 or a multiple of 100.
 * @property {number} - The maximum number of rows to return. NOTE: this needs to be a multiple of 100.
 */
export type HotelTypeInputDto = z.infer<typeof hotelTypeInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelTypeInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      hotel_type_ids: z.array(z.number()).optional(),
      languages: z.array(hotelTypeInputDtoLanguages).optional(),
      offset: z.number().optional(),
      row: z.number().optional(),
    })
    .transform((data) => ({
      hotelTypeIds: data['hotel_type_ids'],
      languages: data['languages'],
      offset: data['offset'],
      row: data['row'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelTypeInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      hotelTypeIds: z.array(z.number()).nullish(),
      languages: z.array(hotelTypeInputDtoLanguages).nullish(),
      offset: z.number().nullish(),
      row: z.number().nullish(),
    })
    .transform((data) => ({
      hotel_type_ids: data['hotelTypeIds'],
      languages: data['languages'],
      offset: data['offset'],
      row: data['row'],
    }));
});
