import { z } from 'zod';
import { meta, metaRequest, metaResponse } from './meta';
import { hotelTypesOutputDto, hotelTypesOutputDtoRequest, hotelTypesOutputDtoResponse } from './hotel-types-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputV2HotelTypesOutputDto: any = z.lazy(() => {
  return z.object({
    meta: meta.optional(),
    result: z.array(hotelTypesOutputDto).optional(),
  });
});

/**
 *
 * @typedef  {ResponseOutputV2HotelTypesOutputDto} responseOutputV2HotelTypesOutputDto
 * @property {Meta}
 * @property {HotelTypesOutputDto[]}
 */
export type ResponseOutputV2HotelTypesOutputDto = z.infer<typeof responseOutputV2HotelTypesOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputV2HotelTypesOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      meta: metaResponse.optional(),
      result: z.array(hotelTypesOutputDtoResponse).optional(),
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
export const responseOutputV2HotelTypesOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({ meta: metaRequest.nullish(), result: z.array(hotelTypesOutputDtoRequest).nullish() })
    .transform((data) => ({
      meta: data['meta'],
      result: data['result'],
    }));
});
