import { z } from 'zod';
import { tags } from './tags';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dealDto: any = z.lazy(() => {
  return z.object({
    discountPercentage: z.number().optional(),
    publicPrice: z.number().optional(),
    tags: z.array(tags).optional(),
  });
});

/**
 * This specifies the deal tagging for the product.
 * @typedef  {DealDto} dealDto - This specifies the deal tagging for the product. - This specifies the deal tagging for the product.
 * @property {number}
 * @property {number}
 * @property {Tags[]}
 */
export type DealDto = z.infer<typeof dealDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dealDtoResponse: any = z.lazy(() => {
  return z
    .object({
      discount_percentage: z.number().optional(),
      public_price: z.number().optional(),
      tags: z.array(tags).optional(),
    })
    .transform((data) => ({
      discountPercentage: data['discount_percentage'],
      publicPrice: data['public_price'],
      tags: data['tags'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dealDtoRequest: any = z.lazy(() => {
  return z
    .object({
      discountPercentage: z.number().nullish(),
      publicPrice: z.number().nullish(),
      tags: z.array(tags).nullish(),
    })
    .transform((data) => ({
      discount_percentage: data['discountPercentage'],
      public_price: data['publicPrice'],
      tags: data['tags'],
    }));
});
