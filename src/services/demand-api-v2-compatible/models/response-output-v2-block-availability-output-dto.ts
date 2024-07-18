import { z } from 'zod';
import { meta, metaRequest, metaResponse } from './meta';
import {
  blockAvailabilityOutputDto,
  blockAvailabilityOutputDtoRequest,
  blockAvailabilityOutputDtoResponse,
} from './block-availability-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputV2BlockAvailabilityOutputDto: any = z.lazy(() => {
  return z.object({
    meta: meta.optional(),
    result: z.array(blockAvailabilityOutputDto).optional(),
  });
});

/**
 *
 * @typedef  {ResponseOutputV2BlockAvailabilityOutputDto} responseOutputV2BlockAvailabilityOutputDto
 * @property {Meta}
 * @property {BlockAvailabilityOutputDto[]}
 */
export type ResponseOutputV2BlockAvailabilityOutputDto = z.infer<typeof responseOutputV2BlockAvailabilityOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputV2BlockAvailabilityOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      meta: metaResponse.optional(),
      result: z.array(blockAvailabilityOutputDtoResponse).optional(),
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
export const responseOutputV2BlockAvailabilityOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({ meta: metaRequest.nullish(), result: z.array(blockAvailabilityOutputDtoRequest).nullish() })
    .transform((data) => ({
      meta: data['meta'],
      result: data['result'],
    }));
});