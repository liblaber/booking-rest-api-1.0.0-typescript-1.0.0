import { z } from 'zod';
import { detailsOutputDto, detailsOutputDtoRequest, detailsOutputDtoResponse } from './details-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseOutputListDetailsOutputDto: any = z.lazy(() => {
  return z.object({
    data: z.array(detailsOutputDto).optional(),
    requestId: z.string().optional(),
    nextPage: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ResponseOutputListDetailsOutputDto} responseOutputListDetailsOutputDto
 * @property {DetailsOutputDto[]}
 * @property {string} - Uniquely identifies the request. Please provide this identifier when contacting support.
 * @property {string} - Indicates that more results are available. Use this pagination token to retrieve the next page of results (via parameter `page`).
 */
export type ResponseOutputListDetailsOutputDto = z.infer<typeof responseOutputListDetailsOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseOutputListDetailsOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      data: z.array(detailsOutputDtoResponse).optional(),
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
export const responseOutputListDetailsOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      data: z.array(detailsOutputDtoRequest).nullish(),
      requestId: z.string().nullish(),
      nextPage: z.string().nullish(),
    })
    .transform((data) => ({
      data: data['data'],
      request_id: data['requestId'],
      next_page: data['nextPage'],
    }));
});
