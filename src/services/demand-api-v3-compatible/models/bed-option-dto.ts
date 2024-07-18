import { z } from 'zod';
import {
  bedConfigurationDto,
  bedConfigurationDtoRequest,
  bedConfigurationDtoResponse,
} from '../../common/bed-configuration-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bedOptionDto: any = z.lazy(() => {
  return z.object({
    bedConfigurations: z.array(bedConfigurationDto).optional(),
    hasBathroom: z.boolean().optional(),
    isBedroom: z.boolean().optional(),
  });
});

/**
 * Lists all possible bedding options for this room or apartment.
 * @typedef  {BedOptionDto} bedOptionDto - Lists all possible bedding options for this room or apartment. - Lists all possible bedding options for this room or apartment.
 * @property {BedConfigurationDto[]} - Lists all alternative bed configurations that are supported.
 * @property {boolean} - Flags if this area includes its own bathroom.
 * @property {boolean} - Flags if this area is marked as a bedroom, otherwise, it should be considered a living room.
 */
export type BedOptionDto = z.infer<typeof bedOptionDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bedOptionDtoResponse: any = z.lazy(() => {
  return z
    .object({
      bed_configurations: z.array(bedConfigurationDtoResponse).optional(),
      has_bathroom: z.boolean().optional(),
      is_bedroom: z.boolean().optional(),
    })
    .transform((data) => ({
      bedConfigurations: data['bed_configurations'],
      hasBathroom: data['has_bathroom'],
      isBedroom: data['is_bedroom'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bedOptionDtoRequest: any = z.lazy(() => {
  return z
    .object({
      bedConfigurations: z.array(bedConfigurationDtoRequest).nullish(),
      hasBathroom: z.boolean().nullish(),
      isBedroom: z.boolean().nullish(),
    })
    .transform((data) => ({
      bed_configurations: data['bedConfigurations'],
      has_bathroom: data['hasBathroom'],
      is_bedroom: data['isBedroom'],
    }));
});
