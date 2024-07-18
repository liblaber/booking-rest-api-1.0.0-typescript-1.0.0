import { z } from 'zod';
import { chargeDto, chargeDtoRequest, chargeDtoResponse } from './charge-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const extraChargesDtoListChargeDto: any = z.lazy(() => {
  return z.object({
    excluded: z.array(chargeDto).optional(),
    included: z.array(chargeDto).optional(),
    conditional: z.array(chargeDto).optional(),
  });
});

/**
 * The charge breakdown. Includes taxes and fees.
 * @typedef  {ExtraChargesDtoListChargeDto} extraChargesDtoListChargeDto - The charge breakdown. Includes taxes and fees. - The charge breakdown. Includes taxes and fees.
 * @property {ChargeDto[]} - Charges not included in 'book'.
 * @property {ChargeDto[]} - Charges included in 'book'.
 * @property {ChargeDto[]}
 */
export type ExtraChargesDtoListChargeDto = z.infer<typeof extraChargesDtoListChargeDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const extraChargesDtoListChargeDtoResponse: any = z.lazy(() => {
  return z
    .object({
      excluded: z.array(chargeDtoResponse).optional(),
      included: z.array(chargeDtoResponse).optional(),
      conditional: z.array(chargeDtoResponse).optional(),
    })
    .transform((data) => ({
      excluded: data['excluded'],
      included: data['included'],
      conditional: data['conditional'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const extraChargesDtoListChargeDtoRequest: any = z.lazy(() => {
  return z
    .object({
      excluded: z.array(chargeDtoRequest).nullish(),
      included: z.array(chargeDtoRequest).nullish(),
      conditional: z.array(chargeDtoRequest).nullish(),
    })
    .transform((data) => ({
      excluded: data['excluded'],
      included: data['included'],
      conditional: data['conditional'],
    }));
});
