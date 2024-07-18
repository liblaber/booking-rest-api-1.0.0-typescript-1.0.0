import { z } from 'zod';
import { translationDto, translationDtoRequest, translationDtoResponse } from './translation-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelFacilityTypeOutputDto: any = z.lazy(() => {
  return z.object({
    hotelFacilityTypeId: z.number().optional(),
    facilityTypeId: z.number().optional(),
    name: z.string().optional(),
    translations: z.array(translationDto).optional(),
  });
});

/**
 *
 * @typedef  {HotelFacilityTypeOutputDto} hotelFacilityTypeOutputDto
 * @property {number} - Unique ID of the hotel facility type.
 * @property {number} - The type of facility this is, mapped from FacilityTypes.
 * @property {string} - The name of this facility type in english.
 * @property {TranslationDto[]} - The fields and their translations in various languages. They are only shown if we have the translations available.
 */
export type HotelFacilityTypeOutputDto = z.infer<typeof hotelFacilityTypeOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelFacilityTypeOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      hotel_facility_type_id: z.number().optional(),
      facility_type_id: z.number().optional(),
      name: z.string().optional(),
      translations: z.array(translationDtoResponse).optional(),
    })
    .transform((data) => ({
      hotelFacilityTypeId: data['hotel_facility_type_id'],
      facilityTypeId: data['facility_type_id'],
      name: data['name'],
      translations: data['translations'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelFacilityTypeOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      hotelFacilityTypeId: z.number().nullish(),
      facilityTypeId: z.number().nullish(),
      name: z.string().nullish(),
      translations: z.array(translationDtoRequest).nullish(),
    })
    .transform((data) => ({
      hotel_facility_type_id: data['hotelFacilityTypeId'],
      facility_type_id: data['facilityTypeId'],
      name: data['name'],
      translations: data['translations'],
    }));
});
