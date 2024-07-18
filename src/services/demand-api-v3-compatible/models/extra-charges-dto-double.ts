import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const extraChargesDtoDouble: any = z.lazy(() => {
  return z.object({
    excluded: z.number().optional(),
    included: z.number().optional(),
    conditional: z.number().optional(),
  });
});

/**
 * The charge breakdown. Includes taxes and fees.
 * @typedef  {ExtraChargesDtoDouble} extraChargesDtoDouble - The charge breakdown. Includes taxes and fees. - The charge breakdown. Includes taxes and fees.
 * @property {number} - Charges not included in 'book'.
 * @property {number} - Charges included in 'book'.
 * @property {number}
 */
export type ExtraChargesDtoDouble = z.infer<typeof extraChargesDtoDouble>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const extraChargesDtoDoubleResponse: any = z.lazy(() => {
  return z
    .object({
      excluded: z.number().optional(),
      included: z.number().optional(),
      conditional: z.number().optional(),
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
export const extraChargesDtoDoubleRequest: any = z.lazy(() => {
  return z
    .object({ excluded: z.number().nullish(), included: z.number().nullish(), conditional: z.number().nullish() })
    .transform((data) => ({
      excluded: data['excluded'],
      included: data['included'],
      conditional: data['conditional'],
    }));
});
