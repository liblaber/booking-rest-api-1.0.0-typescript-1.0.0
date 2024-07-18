import { z } from 'zod';
import { mode } from './mode';

/**
 * The shape of the model inside the application code - what the users use
 */
export const chargeDto: any = z.lazy(() => {
  return z.object({
    charge: z.number().optional(),
    condition: z.number().optional(),
    mode: mode.optional(),
    percentage: z.number().optional(),
    totalAmount: z.number().optional(),
    unitAmount: z.number().optional(),
  });
});

/**
 *
 * @typedef  {ChargeDto} chargeDto
 * @property {number}
 * @property {number}
 * @property {Mode}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type ChargeDto = z.infer<typeof chargeDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const chargeDtoResponse: any = z.lazy(() => {
  return z
    .object({
      charge: z.number().optional(),
      condition: z.number().optional(),
      mode: mode.optional(),
      percentage: z.number().optional(),
      total_amount: z.number().optional(),
      unit_amount: z.number().optional(),
    })
    .transform((data) => ({
      charge: data['charge'],
      condition: data['condition'],
      mode: data['mode'],
      percentage: data['percentage'],
      totalAmount: data['total_amount'],
      unitAmount: data['unit_amount'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const chargeDtoRequest: any = z.lazy(() => {
  return z
    .object({
      charge: z.number().nullish(),
      condition: z.number().nullish(),
      mode: mode.nullish(),
      percentage: z.number().nullish(),
      totalAmount: z.number().nullish(),
      unitAmount: z.number().nullish(),
    })
    .transform((data) => ({
      charge: data['charge'],
      condition: data['condition'],
      mode: data['mode'],
      percentage: data['percentage'],
      total_amount: data['totalAmount'],
      unit_amount: data['unitAmount'],
    }));
});
