import { z } from 'zod';
import { searchOutputDto, searchOutputDtoRequest, searchOutputDtoResponse } from './search-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputListSearchOutputDto: any = z.lazy(() => {
  return z.object({
    data: z.array(searchOutputDto).optional(),
    requestId: z.string().optional(),
    nextPage: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ResponseOutputListSearchOutputDto} responseOutputListSearchOutputDto
 * @property {SearchOutputDto[]}
 * @property {string} - Uniquely identifies the request. Please provide this identifier when contacting support.
 * @property {string} - Indicates that more results are available. Use this pagination token to retrieve the next page of results (via parameter `page`).
 */
export type ResponseOutputListSearchOutputDto = z.infer<typeof responseOutputListSearchOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputListSearchOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      data: z.array(searchOutputDtoResponse).optional(),
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
export const responseOutputListSearchOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      data: z.array(searchOutputDtoRequest).nullish(),
      requestId: z.string().nullish(),
      nextPage: z.string().nullish(),
    })
    .transform((data) => ({
      data: data['data'],
      request_id: data['requestId'],
      next_page: data['nextPage'],
    }));
});
