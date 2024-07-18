import { z } from 'zod';
import { meta, metaRequest, metaResponse } from './meta';
import { hotelsOutputDto, hotelsOutputDtoRequest, hotelsOutputDtoResponse } from './hotels-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputV2HotelsOutputDto: any = z.lazy(() => {
  return z.object({
    meta: meta.optional(),
    result: z.array(hotelsOutputDto).optional(),
  });
});

/**
 *
 * @typedef  {ResponseOutputV2HotelsOutputDto} responseOutputV2HotelsOutputDto
 * @property {Meta}
 * @property {HotelsOutputDto[]}
 */
export type ResponseOutputV2HotelsOutputDto = z.infer<typeof responseOutputV2HotelsOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputV2HotelsOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      meta: metaResponse.optional(),
      result: z.array(hotelsOutputDtoResponse).optional(),
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
export const responseOutputV2HotelsOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({ meta: metaRequest.nullish(), result: z.array(hotelsOutputDtoRequest).nullish() })
    .transform((data) => ({
      meta: data['meta'],
      result: data['result'],
    }));
});
