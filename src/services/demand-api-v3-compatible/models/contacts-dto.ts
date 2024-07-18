import { z } from 'zod';
import { contactDto, contactDtoRequest, contactDtoResponse } from './contact-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const contactsDto: any = z.lazy(() => {
  return z.object({
    general: contactDto.optional(),
    reservations: contactDto.optional(),
  });
});

/**
 * Contact information of the accommodation.
 * @typedef  {ContactsDto} contactsDto - Contact information of the accommodation. - Contact information of the accommodation.
 * @property {ContactDto} - Contact information of the accommodation. It can be `null` if the data is missing.
 * @property {ContactDto} - Contact information of the accommodation. It can be `null` if the data is missing.
 */
export type ContactsDto = z.infer<typeof contactsDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const contactsDtoResponse: any = z.lazy(() => {
  return z
    .object({
      general: contactDtoResponse.optional(),
      reservations: contactDtoResponse.optional(),
    })
    .transform((data) => ({
      general: data['general'],
      reservations: data['reservations'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const contactsDtoRequest: any = z.lazy(() => {
  return z
    .object({ general: contactDtoRequest.nullish(), reservations: contactDtoRequest.nullish() })
    .transform((data) => ({
      general: data['general'],
      reservations: data['reservations'],
    }));
});
