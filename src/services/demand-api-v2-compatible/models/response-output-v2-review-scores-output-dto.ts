import { z } from 'zod';
import { meta, metaRequest, metaResponse } from './meta';
import {
  reviewScoresOutputDto,
  reviewScoresOutputDtoRequest,
  reviewScoresOutputDtoResponse,
} from './review-scores-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputV2ReviewScoresOutputDto: any = z.lazy(() => {
  return z.object({
    meta: meta.optional(),
    result: z.array(reviewScoresOutputDto).optional(),
  });
});

/**
 *
 * @typedef  {ResponseOutputV2ReviewScoresOutputDto} responseOutputV2ReviewScoresOutputDto
 * @property {Meta}
 * @property {ReviewScoresOutputDto[]}
 */
export type ResponseOutputV2ReviewScoresOutputDto = z.infer<typeof responseOutputV2ReviewScoresOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputV2ReviewScoresOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      meta: metaResponse.optional(),
      result: z.array(reviewScoresOutputDtoResponse).optional(),
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
export const responseOutputV2ReviewScoresOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({ meta: metaRequest.nullish(), result: z.array(reviewScoresOutputDtoRequest).nullish() })
    .transform((data) => ({
      meta: data['meta'],
      result: data['result'],
    }));
});
