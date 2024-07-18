import { z } from 'zod';
import { translationDto, translationDtoRequest, translationDtoResponse } from './translation-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelTypesOutputDto: any = z.lazy(() => {
  return z.object({
    translations: z.array(translationDto).optional(),
    name: z.string().optional(),
    hotelTypeId: z.number().optional(),
  });
});

/**
 *
 * @typedef  {HotelTypesOutputDto} hotelTypesOutputDto
 * @property {TranslationDto[]}
 * @property {string}
 * @property {number}
 */
export type HotelTypesOutputDto = z.infer<typeof hotelTypesOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelTypesOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      translations: z.array(translationDtoResponse).optional(),
      name: z.string().optional(),
      hotel_type_id: z.number().optional(),
    })
    .transform((data) => ({
      translations: data['translations'],
      name: data['name'],
      hotelTypeId: data['hotel_type_id'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelTypesOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      translations: z.array(translationDtoRequest).nullish(),
      name: z.string().nullish(),
      hotelTypeId: z.number().nullish(),
    })
    .transform((data) => ({
      translations: data['translations'],
      name: data['name'],
      hotel_type_id: data['hotelTypeId'],
    }));
});
