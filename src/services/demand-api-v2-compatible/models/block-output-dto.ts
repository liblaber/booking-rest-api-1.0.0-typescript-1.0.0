import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const blockOutputDto: any = z.lazy(() => {
  return z.object({
    blockId: z.string().optional(),
    breakfastIncluded: z.boolean().optional(),
  });
});

/**
 * The object containing all the relevant information for the combination of room, policy, meal and occupancy that determines the price."
A block is the unique entity you book with booking.com.
 * @typedef  {BlockOutputDto} blockOutputDto - The object containing all the relevant information for the combination of room, policy, meal and occupancy that determines the price."
A block is the unique entity you book with booking.com. - The object containing all the relevant information for the combination of room, policy, meal and occupancy that determines the price."
A block is the unique entity you book with booking.com.
 * @property {string} 
 * @property {boolean} 
 */
export type BlockOutputDto = z.infer<typeof blockOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const blockOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      block_id: z.string().optional(),
      breakfast_included: z.boolean().optional(),
    })
    .transform((data) => ({
      blockId: data['block_id'],
      breakfastIncluded: data['breakfast_included'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const blockOutputDtoRequest: any = z.lazy(() => {
  return z.object({ blockId: z.string().nullish(), breakfastIncluded: z.boolean().nullish() }).transform((data) => ({
    block_id: data['blockId'],
    breakfast_included: data['breakfastIncluded'],
  }));
});
