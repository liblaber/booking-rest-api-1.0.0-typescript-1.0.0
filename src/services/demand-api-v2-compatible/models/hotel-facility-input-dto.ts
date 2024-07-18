import { z } from 'zod';
import { hotelFacilityInputDtoLanguages } from './hotel-facility-input-dto-languages';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelFacilityInputDto: any = z.lazy(() => {
  return z.object({
    facilityTypeIds: z.array(z.number()).optional(),
    hotelFacilityTypeIds: z.array(z.number()).optional(),
    languages: z.array(hotelFacilityInputDtoLanguages).optional(),
  });
});

/**
 * 
 * @typedef  {HotelFacilityInputDto} hotelFacilityInputDto   
 * @property {number[]} - Limit the results to these facility types.
 * @property {number[]} - Limit the results to these hotel facility types.
 * @property {HotelFacilityInputDtoLanguages[]} - Limit the results to these languages.
Please check the "Possible Values" section of the documentation for the accepted language codes.

 */
export type HotelFacilityInputDto = z.infer<typeof hotelFacilityInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelFacilityInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      facility_type_ids: z.array(z.number()).optional(),
      hotel_facility_type_ids: z.array(z.number()).optional(),
      languages: z.array(hotelFacilityInputDtoLanguages).optional(),
    })
    .transform((data) => ({
      facilityTypeIds: data['facility_type_ids'],
      hotelFacilityTypeIds: data['hotel_facility_type_ids'],
      languages: data['languages'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelFacilityInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      facilityTypeIds: z.array(z.number()).nullish(),
      hotelFacilityTypeIds: z.array(z.number()).nullish(),
      languages: z.array(hotelFacilityInputDtoLanguages).nullish(),
    })
    .transform((data) => ({
      facility_type_ids: data['facilityTypeIds'],
      hotel_facility_type_ids: data['hotelFacilityTypeIds'],
      languages: data['languages'],
    }));
});
