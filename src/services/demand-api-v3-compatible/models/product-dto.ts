import { z } from 'zod';
import { policiesDto, policiesDtoRequest, policiesDtoResponse } from './policies-dto';
import {
  priceDataDtoListChargeDto,
  priceDataDtoListChargeDtoRequest,
  priceDataDtoListChargeDtoResponse,
} from './price-data-dto-list-charge-dto';
import { dealDto, dealDtoRequest, dealDtoResponse } from './deal-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const productDto: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    policies: policiesDto.optional(),
    price: priceDataDtoListChargeDto.optional(),
    deal: dealDto.optional(),
  });
});

/**
 * 
 * @typedef  {ProductDto} productDto   
 * @property {string} - Unique ID of the product.
 * @property {PoliciesDto} - The policies for this product.
 * @property {PriceDataDtoListChargeDto} - The price components of this product or selection of products.
'base' and 'extra_charges' are returned only when explicitly requested (via 'extras=extra_charges').

 * @property {DealDto} - This specifies the deal tagging for the product.
 */
export type ProductDto = z.infer<typeof productDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const productDtoResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      policies: policiesDtoResponse.optional(),
      price: priceDataDtoListChargeDtoResponse.optional(),
      deal: dealDtoResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      policies: data['policies'],
      price: data['price'],
      deal: data['deal'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const productDtoRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      policies: policiesDtoRequest.nullish(),
      price: priceDataDtoListChargeDtoRequest.nullish(),
      deal: dealDtoRequest.nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      policies: data['policies'],
      price: data['price'],
      deal: data['deal'],
    }));
});
