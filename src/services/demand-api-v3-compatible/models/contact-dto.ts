import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const contactDto: any = z.lazy(() => {
  return z.object({
    email: z.any().optional(),
    telephone: z.any().optional(),
  });
});

/**
 * Contact information of the accommodation. It can be `null` if the data is missing.
 * @typedef  {ContactDto} contactDto - Contact information of the accommodation. It can be `null` if the data is missing. - Contact information of the accommodation. It can be `null` if the data is missing.
 * @property {any} - Email address of the accommodation. It can be `null` if the data is missing.
 * @property {any} - Telephone number of the accommodation. It can be `null` if the data is missing.
 */
export type ContactDto = z.infer<typeof contactDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const contactDtoResponse: any = z.lazy(() => {
  return z
    .object({
      email: z.any().optional(),
      telephone: z.any().optional(),
    })
    .transform((data) => ({
      email: data['email'],
      telephone: data['telephone'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const contactDtoRequest: any = z.lazy(() => {
  return z.object({ email: z.any().nullish(), telephone: z.any().nullish() }).transform((data) => ({
    email: data['email'],
    telephone: data['telephone'],
  }));
});
