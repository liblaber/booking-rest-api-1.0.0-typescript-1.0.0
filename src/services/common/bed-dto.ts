import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bedDto: any = z.lazy(() => {
  return z.object({
    bedType: z.number().optional(),
    numberOfBeds: z.number().optional(),
  });
});

/**
 * Detail list of all different types and number of beds included in this configuration.
 * @typedef  {BedDto} bedDto - Detail list of all different types and number of beds included in this configuration. - Detail list of all different types and number of beds included in this configuration.
 * @property {number} - A signed integer number that uniquely identifies a bed type. Examples of bed types are: Single, Double etc.
 * @property {number} - Number of similar beds included in this configuration.
 */
export type BedDto = z.infer<typeof bedDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bedDtoResponse: any = z.lazy(() => {
  return z
    .object({
      bed_type: z.number().optional(),
      number_of_beds: z.number().optional(),
    })
    .transform((data) => ({
      bedType: data['bed_type'],
      numberOfBeds: data['number_of_beds'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bedDtoRequest: any = z.lazy(() => {
  return z.object({ bedType: z.number().nullish(), numberOfBeds: z.number().nullish() }).transform((data) => ({
    bed_type: data['bedType'],
    number_of_beds: data['numberOfBeds'],
  }));
});
