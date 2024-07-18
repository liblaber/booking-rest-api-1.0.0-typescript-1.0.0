import { z } from 'zod';
import { type_ } from './type_';

/**
 * The shape of the model inside the application code - what the users use
 */
export const cancellationDto: any = z.lazy(() => {
  return z.object({
    freeCancellationUntil: z.string().optional(),
    type: type_.optional(),
  });
});

/**
 * The cancellation policy for this product.
 * @typedef  {CancellationDto} cancellationDto - The cancellation policy for this product. - The cancellation policy for this product.
 * @property {string} - Until when the order for this product can be cancelled for free.
 * @property {Type_} - The cancellation scheme supported by this product.
 */
export type CancellationDto = z.infer<typeof cancellationDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const cancellationDtoResponse: any = z.lazy(() => {
  return z
    .object({
      free_cancellation_until: z.string().optional(),
      type: type_.optional(),
    })
    .transform((data) => ({
      freeCancellationUntil: data['free_cancellation_until'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const cancellationDtoRequest: any = z.lazy(() => {
  return z.object({ freeCancellationUntil: z.string().nullish(), type: type_.nullish() }).transform((data) => ({
    free_cancellation_until: data['freeCancellationUntil'],
    type: data['type'],
  }));
});