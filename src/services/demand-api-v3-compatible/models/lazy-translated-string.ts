import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lazyTranslatedString: any = z.lazy(() => {
  return z.object({
    fallback: z.string().optional(),
  });
});

/**
 * Translated accommodation address.
 * @typedef  {LazyTranslatedString} lazyTranslatedString - Translated accommodation address. - Translated accommodation address.
 * @property {string}
 */
export type LazyTranslatedString = z.infer<typeof lazyTranslatedString>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lazyTranslatedStringResponse: any = z.lazy(() => {
  return z
    .object({
      fallback: z.string().optional(),
    })
    .transform((data) => ({
      fallback: data['fallback'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lazyTranslatedStringRequest: any = z.lazy(() => {
  return z.object({ fallback: z.string().nullish() }).transform((data) => ({
    fallback: data['fallback'],
  }));
});
