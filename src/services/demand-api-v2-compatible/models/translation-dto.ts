import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const translationDto: any = z.lazy(() => {
  return z.object({
    language: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TranslationDto} translationDto
 * @property {string}
 * @property {string}
 */
export type TranslationDto = z.infer<typeof translationDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const translationDtoResponse: any = z.lazy(() => {
  return z
    .object({
      language: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      language: data['language'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const translationDtoRequest: any = z.lazy(() => {
  return z.object({ language: z.string().nullish(), name: z.string().nullish() }).transform((data) => ({
    language: data['language'],
    name: data['name'],
  }));
});
