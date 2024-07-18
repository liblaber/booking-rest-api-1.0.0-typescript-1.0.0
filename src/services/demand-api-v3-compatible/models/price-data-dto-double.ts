import { z } from 'zod';
import {
  extraChargesDtoDouble,
  extraChargesDtoDoubleRequest,
  extraChargesDtoDoubleResponse,
} from './extra-charges-dto-double';

/**
 * The shape of the model inside the application code - what the users use
 */
export const priceDataDtoDouble: any = z.lazy(() => {
  return z.object({
    base: z.number().optional(),
    book: z.number().optional(),
    total: z.number().optional(),
    extraCharges: extraChargesDtoDouble.optional(),
  });
});

/**
 * The price components of this product or selection of products.
'base' and 'extra_charges' are returned only when explicitly requested (via 'extras=extra_charges').
 * @typedef  {PriceDataDtoDouble} priceDataDtoDouble - The price components of this product or selection of products.
'base' and 'extra_charges' are returned only when explicitly requested (via 'extras=extra_charges'). - The price components of this product or selection of products.
'base' and 'extra_charges' are returned only when explicitly requested (via 'extras=extra_charges').
 * @property {number} - The base price. Does not include any extra charges.
 * @property {number} - The price that will be charged by Booking.com.
 * @property {number} - The total price. Includes all extra charges.
 * @property {ExtraChargesDtoDouble} - The charge breakdown. Includes taxes and fees.
 */
export type PriceDataDtoDouble = z.infer<typeof priceDataDtoDouble>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const priceDataDtoDoubleResponse: any = z.lazy(() => {
  return z
    .object({
      base: z.number().optional(),
      book: z.number().optional(),
      total: z.number().optional(),
      extra_charges: extraChargesDtoDoubleResponse.optional(),
    })
    .transform((data) => ({
      base: data['base'],
      book: data['book'],
      total: data['total'],
      extraCharges: data['extra_charges'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const priceDataDtoDoubleRequest: any = z.lazy(() => {
  return z
    .object({
      base: z.number().nullish(),
      book: z.number().nullish(),
      total: z.number().nullish(),
      extraCharges: extraChargesDtoDoubleRequest.nullish(),
    })
    .transform((data) => ({
      base: data['base'],
      book: data['book'],
      total: data['total'],
      extra_charges: data['extraCharges'],
    }));
});
