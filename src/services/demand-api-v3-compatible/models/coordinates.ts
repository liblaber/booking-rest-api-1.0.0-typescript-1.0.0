import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const coordinates: any = z.lazy(() => {
  return z.object({
    latitude: z.number(),
    longitude: z.number(),
    radius: z.number(),
  });
});

/**
 * Limit the result list to the specified coordinates.
 * @typedef  {Coordinates} coordinates - Limit the result list to the specified coordinates. - Limit the result list to the specified coordinates.
 * @property {number} - Specify a latitude (as well as a longitude and radius) to do searches around a specific location.
 * @property {number} - Specify a longitude (as well as a latitude and radius) to do searches around a specific location.
 * @property {number} - The radius is km to search around the specified latitude and longitude.
 */
export type Coordinates = z.infer<typeof coordinates>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const coordinatesResponse: any = z.lazy(() => {
  return z
    .object({
      latitude: z.number(),
      longitude: z.number(),
      radius: z.number(),
    })
    .transform((data) => ({
      latitude: data['latitude'],
      longitude: data['longitude'],
      radius: data['radius'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const coordinatesRequest: any = z.lazy(() => {
  return z
    .object({ latitude: z.number().nullish(), longitude: z.number().nullish(), radius: z.number().nullish() })
    .transform((data) => ({
      latitude: data['latitude'],
      longitude: data['longitude'],
      radius: data['radius'],
    }));
});
