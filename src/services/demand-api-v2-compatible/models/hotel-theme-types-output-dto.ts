import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelThemeTypesOutputDto: any = z.lazy(() => {
  return z.object({
    themeId: z.number().optional(),
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {HotelThemeTypesOutputDto} hotelThemeTypesOutputDto
 * @property {number} - Unique ID for this theme.
 * @property {string} - Name of the theme.
 */
export type HotelThemeTypesOutputDto = z.infer<typeof hotelThemeTypesOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelThemeTypesOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      theme_id: z.number().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      themeId: data['theme_id'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelThemeTypesOutputDtoRequest: any = z.lazy(() => {
  return z.object({ themeId: z.number().nullish(), name: z.string().nullish() }).transform((data) => ({
    theme_id: data['themeId'],
    name: data['name'],
  }));
});
