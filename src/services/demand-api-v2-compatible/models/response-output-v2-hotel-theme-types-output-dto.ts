import { z } from 'zod';
import { meta, metaRequest, metaResponse } from './meta';
import {
  hotelThemeTypesOutputDto,
  hotelThemeTypesOutputDtoRequest,
  hotelThemeTypesOutputDtoResponse,
} from './hotel-theme-types-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputV2HotelThemeTypesOutputDto: any = z.lazy(() => {
  return z.object({
    meta: meta.optional(),
    result: z.array(hotelThemeTypesOutputDto).optional(),
  });
});

/**
 *
 * @typedef  {ResponseOutputV2HotelThemeTypesOutputDto} responseOutputV2HotelThemeTypesOutputDto
 * @property {Meta}
 * @property {HotelThemeTypesOutputDto[]}
 */
export type ResponseOutputV2HotelThemeTypesOutputDto = z.infer<typeof responseOutputV2HotelThemeTypesOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputV2HotelThemeTypesOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      meta: metaResponse.optional(),
      result: z.array(hotelThemeTypesOutputDtoResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      result: data['result'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputV2HotelThemeTypesOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({ meta: metaRequest.nullish(), result: z.array(hotelThemeTypesOutputDtoRequest).nullish() })
    .transform((data) => ({
      meta: data['meta'],
      result: data['result'],
    }));
});
