import { z } from 'zod';
import { translatedString, translatedStringRequest, translatedStringResponse } from './translated-string';

/**
 * The shape of the model inside the application code - what the users use
 */
export const translationInformation: any = z.lazy(() => {
  return z.object({
    translatedString: translatedString.optional(),
    nonLazyTranslations: z.any().optional(),
  });
});

/**
 * Text containing important information about the property. The value is translated in the requested languages.
 * @typedef  {TranslationInformation} translationInformation - Text containing important information about the property. The value is translated in the requested languages. - Text containing important information about the property. The value is translated in the requested languages.
 * @property {TranslatedString} - Translated description of this room. The maximum number of characters returned may be limited by contract.
 * @property {any}
 */
export type TranslationInformation = z.infer<typeof translationInformation>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const translationInformationResponse: any = z.lazy(() => {
  return z
    .object({
      translated_string: translatedStringResponse.optional(),
      non_lazy_translations: z.any().optional(),
    })
    .transform((data) => ({
      translatedString: data['translated_string'],
      nonLazyTranslations: data['non_lazy_translations'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const translationInformationRequest: any = z.lazy(() => {
  return z
    .object({ translatedString: translatedStringRequest.nullish(), nonLazyTranslations: z.any().nullish() })
    .transform((data) => ({
      translated_string: data['translatedString'],
      non_lazy_translations: data['nonLazyTranslations'],
    }));
});
