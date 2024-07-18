import { z } from 'zod';
import { bedDto, bedDtoRequest, bedDtoResponse } from './bed-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bedConfigurationDto: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    configuration: z.array(bedDto).optional(),
  });
});

/**
 * Lists all alternative bed configurations that are supported.
 * @typedef  {BedConfigurationDto} bedConfigurationDto - Lists all alternative bed configurations that are supported. - Lists all alternative bed configurations that are supported.
 * @property {string} - Uniquely identifies this bed configuration.
 * @property {BedDto[]} - Detail list of all different types and number of beds included in this configuration.
 */
export type BedConfigurationDto = z.infer<typeof bedConfigurationDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bedConfigurationDtoResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      configuration: z.array(bedDtoResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      configuration: data['configuration'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bedConfigurationDtoRequest: any = z.lazy(() => {
  return z.object({ id: z.string().nullish(), configuration: z.array(bedDtoRequest).nullish() }).transform((data) => ({
    id: data['id'],
    configuration: data['configuration'],
  }));
});
