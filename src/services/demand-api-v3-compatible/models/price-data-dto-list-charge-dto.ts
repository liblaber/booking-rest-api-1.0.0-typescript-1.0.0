import { z } from 'zod';
import {
  extraChargesDtoListChargeDto,
  extraChargesDtoListChargeDtoRequest,
  extraChargesDtoListChargeDtoResponse,
} from './extra-charges-dto-list-charge-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const priceDataDtoListChargeDto: any = z.lazy(() => {
  return z.object({
    base: z.number().optional(),
    book: z.number().optional(),
    total: z.number().optional(),
    extraCharges: extraChargesDtoListChargeDto.optional(),
  });
});

/**
 * The price components of this product or selection of products.
'base' and 'extra_charges' are returned only when explicitly requested (via 'extras=extra_charges').

 * @typedef  {PriceDataDtoListChargeDto} priceDataDtoListChargeDto - The price components of this product or selection of products.
'base' and 'extra_charges' are returned only when explicitly requested (via 'extras=extra_charges').
 - The price components of this product or selection of products.
'base' and 'extra_charges' are returned only when explicitly requested (via 'extras=extra_charges').

 * @property {number} - The base price. Does not include any extra charges.
 * @property {number} - The price that will be charged by Booking.com.
 * @property {number} - The total price. Includes all extra charges.
 * @property {ExtraChargesDtoListChargeDto} - The charge breakdown. Includes taxes and fees.
 */
export type PriceDataDtoListChargeDto = z.infer<typeof priceDataDtoListChargeDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const priceDataDtoListChargeDtoResponse: any = z.lazy(() => {
  return z
    .object({
      base: z.number().optional(),
      book: z.number().optional(),
      total: z.number().optional(),
      extra_charges: extraChargesDtoListChargeDtoResponse.optional(),
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
export const priceDataDtoListChargeDtoRequest: any = z.lazy(() => {
  return z
    .object({
      base: z.number().nullish(),
      book: z.number().nullish(),
      total: z.number().nullish(),
      extraCharges: extraChargesDtoListChargeDtoRequest.nullish(),
    })
    .transform((data) => ({
      base: data['base'],
      book: data['book'],
      total: data['total'],
      extra_charges: data['extraCharges'],
    }));
});
