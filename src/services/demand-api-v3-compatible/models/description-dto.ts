import { z } from 'zod';
import {
  translationInformation,
  translationInformationRequest,
  translationInformationResponse,
} from './translation-information';
import { truncatedString, truncatedStringRequest, truncatedStringResponse } from './truncated-string';

/**
 * The shape of the model inside the application code - what the users use
 */
export const descriptionDto: any = z.lazy(() => {
  return z.object({
    importantInformation: translationInformation.optional(),
    licenseNumbers: z.array(z.string()).optional(),
    text: truncatedString.optional(),
  });
});

/**
 * Textual information about the accommodation. Requires `{"extras":["description"]}`.
 * @typedef  {DescriptionDto} descriptionDto - Textual information about the accommodation. Requires `{"extras":["description"]}`. - Textual information about the accommodation. Requires `{"extras":["description"]}`.
 * @property {TranslationInformation} - Text containing important information about the property. The value is translated in the requested languages.
 * @property {string[]} - List of all the license numbers of this accommodation property.
 * @property {TruncatedString} - The translated description text of this accommodation property in the requested languages.
The maximum number of characters returned may be limited by contract.

 */
export type DescriptionDto = z.infer<typeof descriptionDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const descriptionDtoResponse: any = z.lazy(() => {
  return z
    .object({
      important_information: translationInformationResponse.optional(),
      license_numbers: z.array(z.string()).optional(),
      text: truncatedStringResponse.optional(),
    })
    .transform((data) => ({
      importantInformation: data['important_information'],
      licenseNumbers: data['license_numbers'],
      text: data['text'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const descriptionDtoRequest: any = z.lazy(() => {
  return z
    .object({
      importantInformation: translationInformationRequest.nullish(),
      licenseNumbers: z.array(z.string()).nullish(),
      text: truncatedStringRequest.nullish(),
    })
    .transform((data) => ({
      important_information: data['importantInformation'],
      license_numbers: data['licenseNumbers'],
      text: data['text'],
    }));
});
