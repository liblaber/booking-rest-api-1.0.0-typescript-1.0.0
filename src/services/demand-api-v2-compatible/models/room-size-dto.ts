import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roomSizeDto: any = z.lazy(() => {
  return z.object({
    metreSquare: z.number().optional(),
  });
});

/**
 *
 * @typedef  {RoomSizeDto} roomSizeDto
 * @property {number}
 */
export type RoomSizeDto = z.infer<typeof roomSizeDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roomSizeDtoResponse: any = z.lazy(() => {
  return z
    .object({
      metre_square: z.number().optional(),
    })
    .transform((data) => ({
      metreSquare: data['metre_square'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roomSizeDtoRequest: any = z.lazy(() => {
  return z.object({ metreSquare: z.number().nullish() }).transform((data) => ({
    metre_square: data['metreSquare'],
  }));
});
