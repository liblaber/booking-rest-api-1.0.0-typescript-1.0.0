import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const photoUrlDto: any = z.lazy(() => {
  return z.object({
    large: z.string().optional(),
    standard: z.string().optional(),
    thumbnail: z.string().optional(),
    thumbnailLarge: z.string().optional(),
  });
});

/**
 *
 * @typedef  {PhotoUrlDto} photoUrlDto
 * @property {string} - URL of the photo image with a maximum width of 1280 pixels.
 * @property {string} - URL of the photo image with a maximum width of 500 pixels.
 * @property {string} - URL of the photo thumbnail image with dimensions 100x100 pixels.
 * @property {string} - URL of the photo thumbnail image with dimensions 300x300 pixels.
 */
export type PhotoUrlDto = z.infer<typeof photoUrlDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const photoUrlDtoResponse: any = z.lazy(() => {
  return z
    .object({
      large: z.string().optional(),
      standard: z.string().optional(),
      thumbnail: z.string().optional(),
      thumbnail_large: z.string().optional(),
    })
    .transform((data) => ({
      large: data['large'],
      standard: data['standard'],
      thumbnail: data['thumbnail'],
      thumbnailLarge: data['thumbnail_large'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const photoUrlDtoRequest: any = z.lazy(() => {
  return z
    .object({
      large: z.string().nullish(),
      standard: z.string().nullish(),
      thumbnail: z.string().nullish(),
      thumbnailLarge: z.string().nullish(),
    })
    .transform((data) => ({
      large: data['large'],
      standard: data['standard'],
      thumbnail: data['thumbnail'],
      thumbnail_large: data['thumbnailLarge'],
    }));
});
