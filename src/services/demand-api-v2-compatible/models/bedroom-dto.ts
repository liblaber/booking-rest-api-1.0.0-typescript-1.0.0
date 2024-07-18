import { z } from 'zod';
import {
  bedConfigurationDto,
  bedConfigurationDtoRequest,
  bedConfigurationDtoResponse,
} from '../../common/bed-configuration-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bedroomDto: any = z.lazy(() => {
  return z.object({
    bedConfigurations: z.array(bedConfigurationDto).optional(),
  });
});

/**
 *
 * @typedef  {BedroomDto} bedroomDto
 * @property {BedConfigurationDto[]}
 */
export type BedroomDto = z.infer<typeof bedroomDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bedroomDtoResponse: any = z.lazy(() => {
  return z
    .object({
      bed_configurations: z.array(bedConfigurationDtoResponse).optional(),
    })
    .transform((data) => ({
      bedConfigurations: data['bed_configurations'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bedroomDtoRequest: any = z.lazy(() => {
  return z.object({ bedConfigurations: z.array(bedConfigurationDtoRequest).nullish() }).transform((data) => ({
    bed_configurations: data['bedConfigurations'],
  }));
});
