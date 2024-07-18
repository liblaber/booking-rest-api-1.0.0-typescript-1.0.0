import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputConstantsOutputDto: any = z.lazy(() => {
  return z.object({
    data: z.any().optional(),
    requestId: z.string().optional(),
    nextPage: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ResponseOutputConstantsOutputDto} responseOutputConstantsOutputDto
 * @property {any}
 * @property {string} - Uniquely identifies the request. Please provide this identifier when contacting support.
 * @property {string} - Indicates that more results are available. Use this pagination token to retrieve the next page of results (via parameter `page`).
 */
export type ResponseOutputConstantsOutputDto = z.infer<typeof responseOutputConstantsOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputConstantsOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      data: z.any().optional(),
      request_id: z.string().optional(),
      next_page: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      requestId: data['request_id'],
      nextPage: data['next_page'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputConstantsOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({ data: z.any().nullish(), requestId: z.string().nullish(), nextPage: z.string().nullish() })
    .transform((data) => ({
      data: data['data'],
      request_id: data['requestId'],
      next_page: data['nextPage'],
    }));
});
