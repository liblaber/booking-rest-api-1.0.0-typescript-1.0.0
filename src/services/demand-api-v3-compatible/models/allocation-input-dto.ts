import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const allocationInputDto: any = z.lazy(() => {
  return z.object({
    children: z.array(z.number()).optional(),
    numberOfAdults: z.number().gte(1),
  });
});

/**
 * The exact allocation of guests to rooms.
 * @typedef  {AllocationInputDto} allocationInputDto - The exact allocation of guests to rooms. - The exact allocation of guests to rooms.
 * @property {number[]} - The children ages for this room.
 * @property {number} - The number of adults for this room.
 */
export type AllocationInputDto = z.infer<typeof allocationInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const allocationInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      children: z.array(z.number()).optional(),
      number_of_adults: z.number().gte(1),
    })
    .transform((data) => ({
      children: data['children'],
      numberOfAdults: data['number_of_adults'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const allocationInputDtoRequest: any = z.lazy(() => {
  return z
    .object({ children: z.array(z.number()).nullish(), numberOfAdults: z.number().nullish() })
    .transform((data) => ({
      children: data['children'],
      number_of_adults: data['numberOfAdults'],
    }));
});
