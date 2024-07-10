// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { meta, metaRequest, metaResponse } from '../../common/meta';
import {
  hotelAvailabilityOutputDto,
  hotelAvailabilityOutputDtoRequest,
  hotelAvailabilityOutputDtoResponse,
} from './hotel-availability-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputV2HotelAvailabilityOutputDto = z.object({
  meta: meta.optional(),
  result: z.array(hotelAvailabilityOutputDto).optional(),
});

/**
 *
 * @typedef  {ResponseOutputV2HotelAvailabilityOutputDto} responseOutputV2HotelAvailabilityOutputDto
 * @property {Meta}
 * @property {HotelAvailabilityOutputDto[]}
 */
export type ResponseOutputV2HotelAvailabilityOutputDto = z.infer<typeof responseOutputV2HotelAvailabilityOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputV2HotelAvailabilityOutputDtoResponse = z
  .object({
    meta: metaResponse.optional(),
    result: z.array(hotelAvailabilityOutputDtoResponse).optional(),
  })
  .transform((data) => ({
    meta: data['meta'],
    result: data['result'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputV2HotelAvailabilityOutputDtoRequest = z
  .object({ meta: metaRequest.nullish(), result: z.array(hotelAvailabilityOutputDtoRequest).nullish() })
  .transform((data) => ({
    meta: data['meta'],
    result: data['result'],
  }));