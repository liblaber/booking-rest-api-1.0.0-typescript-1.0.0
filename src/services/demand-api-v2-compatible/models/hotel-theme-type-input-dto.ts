import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelThemeTypeInputDto: any = z.lazy(() => {
  return z.object({
    themeIds: z.array(z.number()).optional(),
    offset: z.number().optional(),
    row: z.number().optional(),
  });
});

/**
 *
 * @typedef  {HotelThemeTypeInputDto} hotelThemeTypeInputDto
 * @property {number[]} - Limit the results to these themes.
 * @property {number} - The number of rows to offset the results by. NOTE: this needs to be 0 or a multiple of 100.
 * @property {number} - The maximum number of rows to return. NOTE: this needs to be a multiple of 100.
 */
export type HotelThemeTypeInputDto = z.infer<typeof hotelThemeTypeInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelThemeTypeInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      theme_ids: z.array(z.number()).optional(),
      offset: z.number().optional(),
      row: z.number().optional(),
    })
    .transform((data) => ({
      themeIds: data['theme_ids'],
      offset: data['offset'],
      row: data['row'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelThemeTypeInputDtoRequest: any = z.lazy(() => {
  return z
    .object({ themeIds: z.array(z.number()).nullish(), offset: z.number().nullish(), row: z.number().nullish() })
    .transform((data) => ({
      theme_ids: data['themeIds'],
      offset: data['offset'],
      row: data['row'],
    }));
});
