import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const alternativeKeyLocationDto: any = z.lazy(() => {
  return z.object({
    address: z.any().optional(),
    city: z.any().optional(),
    postalCode: z.string().optional(),
  });
});

/**
 * Alternate location to collect the key of this accommodation property.
This is returned if the key to access the property is in another location.

 * @typedef  {AlternativeKeyLocationDto} alternativeKeyLocationDto - Alternate location to collect the key of this accommodation property.
This is returned if the key to access the property is in another location.
 - Alternate location to collect the key of this accommodation property.
This is returned if the key to access the property is in another location.

 * @property {any} 
 * @property {any} 
 * @property {string} 
 */
export type AlternativeKeyLocationDto = z.infer<typeof alternativeKeyLocationDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const alternativeKeyLocationDtoResponse: any = z.lazy(() => {
  return z
    .object({
      address: z.any().optional(),
      city: z.any().optional(),
      postal_code: z.string().optional(),
    })
    .transform((data) => ({
      address: data['address'],
      city: data['city'],
      postalCode: data['postal_code'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const alternativeKeyLocationDtoRequest: any = z.lazy(() => {
  return z
    .object({ address: z.any().nullish(), city: z.any().nullish(), postalCode: z.string().nullish() })
    .transform((data) => ({
      address: data['address'],
      city: data['city'],
      postal_code: data['postalCode'],
    }));
});
