import { z } from 'zod';
import { paymentTypes } from './payment-types';

/**
 * The shape of the model inside the application code - what the users use
 */
export const paymentDto: any = z.lazy(() => {
  return z.object({
    paymentTypes: z.array(paymentTypes).optional(),
  });
});

/**
 * Payment terms and conditions for this product.
 * @typedef  {PaymentDto} paymentDto - Payment terms and conditions for this product. - Payment terms and conditions for this product.
 * @property {PaymentTypes[]}
 */
export type PaymentDto = z.infer<typeof paymentDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const paymentDtoResponse: any = z.lazy(() => {
  return z
    .object({
      payment_types: z.array(paymentTypes).optional(),
    })
    .transform((data) => ({
      paymentTypes: data['payment_types'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const paymentDtoRequest: any = z.lazy(() => {
  return z.object({ paymentTypes: z.array(paymentTypes).nullish() }).transform((data) => ({
    payment_types: data['paymentTypes'],
  }));
});
