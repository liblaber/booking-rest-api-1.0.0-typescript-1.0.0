import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const numberOfRoomsDto: any = z.lazy(() => {
  return z.object({
    bathrooms: z.number().optional(),
    bedrooms: z.number().optional(),
    livingRooms: z.number().optional(),
  });
});

/**
 * Total rooms available.
 * @typedef  {NumberOfRoomsDto} numberOfRoomsDto - Total rooms available. - Total rooms available.
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type NumberOfRoomsDto = z.infer<typeof numberOfRoomsDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const numberOfRoomsDtoResponse: any = z.lazy(() => {
  return z
    .object({
      bathrooms: z.number().optional(),
      bedrooms: z.number().optional(),
      living_rooms: z.number().optional(),
    })
    .transform((data) => ({
      bathrooms: data['bathrooms'],
      bedrooms: data['bedrooms'],
      livingRooms: data['living_rooms'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const numberOfRoomsDtoRequest: any = z.lazy(() => {
  return z
    .object({ bathrooms: z.number().nullish(), bedrooms: z.number().nullish(), livingRooms: z.number().nullish() })
    .transform((data) => ({
      bathrooms: data['bathrooms'],
      bedrooms: data['bedrooms'],
      living_rooms: data['livingRooms'],
    }));
});
