import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const programSettingsDto: any = z.lazy(() => {
  return z.object({
    travelProud: z.boolean().optional(),
  });
});

/**
 * Details of programmes undergone by the property.
 * @typedef  {ProgramSettingsDto} programSettingsDto - Details of programmes undergone by the property. - Details of programmes undergone by the property.
 * @property {boolean} - Boolean value is "true" if property has travel proud badge and "false" otherwise.
 */
export type ProgramSettingsDto = z.infer<typeof programSettingsDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const programSettingsDtoResponse: any = z.lazy(() => {
  return z
    .object({
      travel_proud: z.boolean().optional(),
    })
    .transform((data) => ({
      travelProud: data['travel_proud'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const programSettingsDtoRequest: any = z.lazy(() => {
  return z.object({ travelProud: z.boolean().nullish() }).transform((data) => ({
    travel_proud: data['travelProud'],
  }));
});
