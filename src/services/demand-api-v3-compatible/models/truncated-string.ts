import { z } from 'zod';
import { translatedString, translatedStringRequest, translatedStringResponse } from './translated-string';

/**
 * The shape of the model inside the application code - what the users use
 */
export const truncatedString: any = z.lazy(() => {
  return z.object({
    truncate: z.boolean().optional(),
    translatedString: translatedString.optional(),
  });
});

/**
 * The translated description text of this accommodation property in the requested languages.
The maximum number of characters returned may be limited by contract.

 * @typedef  {TruncatedString} truncatedString - The translated description text of this accommodation property in the requested languages.
The maximum number of characters returned may be limited by contract.
 - The translated description text of this accommodation property in the requested languages.
The maximum number of characters returned may be limited by contract.

 * @property {boolean} 
 * @property {TranslatedString} - Translated description of this room. The maximum number of characters returned may be limited by contract.
 */
export type TruncatedString = z.infer<typeof truncatedString>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const truncatedStringResponse: any = z.lazy(() => {
  return z
    .object({
      truncate: z.boolean().optional(),
      translated_string: translatedStringResponse.optional(),
    })
    .transform((data) => ({
      truncate: data['truncate'],
      translatedString: data['translated_string'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const truncatedStringRequest: any = z.lazy(() => {
  return z
    .object({ truncate: z.boolean().nullish(), translatedString: translatedStringRequest.nullish() })
    .transform((data) => ({
      truncate: data['truncate'],
      translated_string: data['translatedString'],
    }));
});
