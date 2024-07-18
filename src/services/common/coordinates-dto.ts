import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const coordinatesDto: any = z.lazy(() => {
  return z.object({
    latitude: z.number().multipleOf(0.00001).optional(),
    longitude: z.number().multipleOf(0.00001).optional(),
  });
});

/**
 * A signed integer number that uniquely identifies a city.
 * @typedef  {CoordinatesDto} coordinatesDto - A signed integer number that uniquely identifies a city. - A signed integer number that uniquely identifies a city.
 * @property {number} - Latitude.
 * @property {number} - Longitude.
 */
export type CoordinatesDto = z.infer<typeof coordinatesDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const coordinatesDtoResponse: any = z.lazy(() => {
  return z
    .object({
      latitude: z.number().multipleOf(0.00001).optional(),
      longitude: z.number().multipleOf(0.00001).optional(),
    })
    .transform((data) => ({
      latitude: data['latitude'],
      longitude: data['longitude'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const coordinatesDtoRequest: any = z.lazy(() => {
  return z.object({ latitude: z.number().nullish(), longitude: z.number().nullish() }).transform((data) => ({
    latitude: data['latitude'],
    longitude: data['longitude'],
  }));
});
