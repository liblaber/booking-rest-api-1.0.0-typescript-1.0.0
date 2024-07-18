import { z } from 'zod';
import { photoUrlDto, photoUrlDtoRequest, photoUrlDtoResponse } from './photo-url-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const photoDto: any = z.lazy(() => {
  return z.object({
    mainPhoto: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    url: photoUrlDto.optional(),
  });
});

/**
 *
 * @typedef  {PhotoDto} photoDto
 * @property {boolean} - Flags this as the main photo. Not returned otherwise.
 * @property {string[]} - A list of tags associated with the photo. Manually generated.
 * @property {PhotoUrlDto}
 */
export type PhotoDto = z.infer<typeof photoDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const photoDtoResponse: any = z.lazy(() => {
  return z
    .object({
      main_photo: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
      url: photoUrlDtoResponse.optional(),
    })
    .transform((data) => ({
      mainPhoto: data['main_photo'],
      tags: data['tags'],
      url: data['url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const photoDtoRequest: any = z.lazy(() => {
  return z
    .object({
      mainPhoto: z.boolean().nullish(),
      tags: z.array(z.string()).nullish(),
      url: photoUrlDtoRequest.nullish(),
    })
    .transform((data) => ({
      main_photo: data['mainPhoto'],
      tags: data['tags'],
      url: data['url'],
    }));
});
