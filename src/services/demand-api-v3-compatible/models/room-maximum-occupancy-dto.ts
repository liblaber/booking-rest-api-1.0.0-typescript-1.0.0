import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roomMaximumOccupancyDto: any = z.lazy(() => {
  return z.object({
    adults: z.number().optional(),
    children: z.number().optional(),
    totalGuests: z.number().optional(),
  });
});

/**
 * Occupancy limits and options.
 * @typedef  {RoomMaximumOccupancyDto} roomMaximumOccupancyDto - Occupancy limits and options. - Occupancy limits and options.
 * @property {number} - Maximum number of adults allowed.
 * @property {number} - Maximum number of children allowed (children will be typically defined by being under 18 years of age).
 * @property {number} - **DEPRECATED** Total capacity of adults + children allowed.
 */
export type RoomMaximumOccupancyDto = z.infer<typeof roomMaximumOccupancyDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roomMaximumOccupancyDtoResponse: any = z.lazy(() => {
  return z
    .object({
      adults: z.number().optional(),
      children: z.number().optional(),
      total_guests: z.number().optional(),
    })
    .transform((data) => ({
      adults: data['adults'],
      children: data['children'],
      totalGuests: data['total_guests'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roomMaximumOccupancyDtoRequest: any = z.lazy(() => {
  return z
    .object({ adults: z.number().nullish(), children: z.number().nullish(), totalGuests: z.number().nullish() })
    .transform((data) => ({
      adults: data['adults'],
      children: data['children'],
      total_guests: data['totalGuests'],
    }));
});
