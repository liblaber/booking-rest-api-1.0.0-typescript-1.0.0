import { z } from 'zod';
import { facilityDtoAttributes } from './facility-dto-attributes';

/**
 * The shape of the model inside the application code - what the users use
 */
export const facilityDto: any = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    attributes: z.array(facilityDtoAttributes).optional(),
  });
});

/**
 * The list of facilities available in this property. Requires `{"extras":["facilities"]}`.
 * @typedef  {FacilityDto} facilityDto - The list of facilities available in this property. Requires `{"extras":["facilities"]}`. - The list of facilities available in this property. Requires `{"extras":["facilities"]}`.
 * @property {number} - A signed integer number that uniquely identifies an accommodation property facility.
Examples of facilities are: Parking, Restaurant, Room service etc.

 * @property {FacilityDtoAttributes[]} - List of optional attributes for this facility.
 */
export type FacilityDto = z.infer<typeof facilityDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const facilityDtoResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      attributes: z.array(facilityDtoAttributes).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      attributes: data['attributes'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const facilityDtoRequest: any = z.lazy(() => {
  return z
    .object({ id: z.number().nullish(), attributes: z.array(facilityDtoAttributes).nullish() })
    .transform((data) => ({
      id: data['id'],
      attributes: data['attributes'],
    }));
});
