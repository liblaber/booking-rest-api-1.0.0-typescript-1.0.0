import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const cribsAndExtraBedsDto: any = z.lazy(() => {
  return z.object({
    areAllowed: z.boolean().optional(),
    maximumNumberOfCribs: z.number().optional(),
    maximumNumberOfExtraBeds: z.number().optional(),
  });
});

/**
 * Lists room options regarding adding cribs and/or extra beds.
 * @typedef  {CribsAndExtraBedsDto} cribsAndExtraBedsDto - Lists room options regarding adding cribs and/or extra beds. - Lists room options regarding adding cribs and/or extra beds.
 * @property {boolean} - Flags if cots and extra beds can be placed together in the room.
`true` allows both up to their maximum limits. `false` requires exclusive choice of either cots or extra beds.

 * @property {number} - Maximum number of cribs that can be added.
 * @property {number} - Maximum number of extra beds that can be added.
 */
export type CribsAndExtraBedsDto = z.infer<typeof cribsAndExtraBedsDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const cribsAndExtraBedsDtoResponse: any = z.lazy(() => {
  return z
    .object({
      are_allowed: z.boolean().optional(),
      maximum_number_of_cribs: z.number().optional(),
      maximum_number_of_extra_beds: z.number().optional(),
    })
    .transform((data) => ({
      areAllowed: data['are_allowed'],
      maximumNumberOfCribs: data['maximum_number_of_cribs'],
      maximumNumberOfExtraBeds: data['maximum_number_of_extra_beds'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const cribsAndExtraBedsDtoRequest: any = z.lazy(() => {
  return z
    .object({
      areAllowed: z.boolean().nullish(),
      maximumNumberOfCribs: z.number().nullish(),
      maximumNumberOfExtraBeds: z.number().nullish(),
    })
    .transform((data) => ({
      are_allowed: data['areAllowed'],
      maximum_number_of_cribs: data['maximumNumberOfCribs'],
      maximum_number_of_extra_beds: data['maximumNumberOfExtraBeds'],
    }));
});
