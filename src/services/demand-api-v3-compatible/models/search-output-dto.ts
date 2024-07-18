import { z } from 'zod';
import { priceDataDtoDouble, priceDataDtoDoubleRequest, priceDataDtoDoubleResponse } from './price-data-dto-double';
import { productDto, productDtoRequest, productDtoResponse } from './product-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOutputDto: any = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .optional(),
    deepLinkUrl: z.string().optional(),
    url: z.string().optional(),
    price: priceDataDtoDouble.optional(),
    products: z.array(productDto).optional(),
  });
});

/**
 * 
 * @typedef  {SearchOutputDto} searchOutputDto   
 * @property {number} - A signed integer number that uniquely identifies an accommodation property.
 * @property {string} - A three-letter code that uniquely identifies a monetary currency as defined by the ISO 4217 standard.
 * @property {string} - Deep link mobile app URL.
 * @property {string} - Internet address for the property page on Booking.com.
 * @property {PriceDataDtoDouble} - The price components of this product or selection of products.
'base' and 'extra_charges' are returned only when explicitly requested (via 'extras=extra_charges').
 * @property {ProductDto[]} 
 */
export type SearchOutputDto = z.infer<typeof searchOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      currency: z
        .string()
        .regex(/^[A-Z]{3}$/)
        .optional(),
      deep_link_url: z.string().optional(),
      url: z.string().optional(),
      price: priceDataDtoDoubleResponse.optional(),
      products: z.array(productDtoResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      currency: data['currency'],
      deepLinkUrl: data['deep_link_url'],
      url: data['url'],
      price: data['price'],
      products: data['products'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      currency: z.string().nullish(),
      deepLinkUrl: z.string().nullish(),
      url: z.string().nullish(),
      price: priceDataDtoDoubleRequest.nullish(),
      products: z.array(productDtoRequest).nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      currency: data['currency'],
      deep_link_url: data['deepLinkUrl'],
      url: data['url'],
      price: data['price'],
      products: data['products'],
    }));
});
