import { z } from 'zod';
import { meta, metaRequest, metaResponse } from './meta';
import {
  hotelFacilityTypeOutputDto,
  hotelFacilityTypeOutputDtoRequest,
  hotelFacilityTypeOutputDtoResponse,
} from './hotel-facility-type-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputV2HotelFacilityTypeOutputDto: any = z.lazy(() => {
  return z.object({
    meta: meta.optional(),
    result: z.array(hotelFacilityTypeOutputDto).optional(),
  });
});

/**
 *
 * @typedef  {ResponseOutputV2HotelFacilityTypeOutputDto} responseOutputV2HotelFacilityTypeOutputDto
 * @property {Meta}
 * @property {HotelFacilityTypeOutputDto[]}
 */
export type ResponseOutputV2HotelFacilityTypeOutputDto = z.infer<typeof responseOutputV2HotelFacilityTypeOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputV2HotelFacilityTypeOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      meta: metaResponse.optional(),
      result: z.array(hotelFacilityTypeOutputDtoResponse).optional(),
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
export const responseOutputV2HotelFacilityTypeOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({ meta: metaRequest.nullish(), result: z.array(hotelFacilityTypeOutputDtoRequest).nullish() })
    .transform((data) => ({
      meta: data['meta'],
      result: data['result'],
    }));
});
