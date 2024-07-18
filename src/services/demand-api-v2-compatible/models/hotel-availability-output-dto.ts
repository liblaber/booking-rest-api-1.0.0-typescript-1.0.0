import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelAvailabilityOutputDto: any = z.lazy(() => {
  return z.object({
    hotelId: z.number().optional(),
    hotelCurrencyCode: z.string().optional(),
    price: z.number().multipleOf(0.01).optional(),
    netPrice: z.number().multipleOf(0.01).optional(),
  });
});

/**
 *
 * @typedef  {HotelAvailabilityOutputDto} hotelAvailabilityOutputDto
 * @property {number} - The unique identifier of this hotel.
 * @property {string} - The currency code of the hotel's currency.
 * @property {number} - The display price of the room in this hotel.
 * @property {number} - The net price (price without charges) of the room in this hotel.
 */
export type HotelAvailabilityOutputDto = z.infer<typeof hotelAvailabilityOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelAvailabilityOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      hotel_id: z.number().optional(),
      hotel_currency_code: z.string().optional(),
      price: z.number().multipleOf(0.01).optional(),
      net_price: z.number().multipleOf(0.01).optional(),
    })
    .transform((data) => ({
      hotelId: data['hotel_id'],
      hotelCurrencyCode: data['hotel_currency_code'],
      price: data['price'],
      netPrice: data['net_price'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelAvailabilityOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      hotelId: z.number().nullish(),
      hotelCurrencyCode: z.string().nullish(),
      price: z.number().nullish(),
      netPrice: z.number().nullish(),
    })
    .transform((data) => ({
      hotel_id: data['hotelId'],
      hotel_currency_code: data['hotelCurrencyCode'],
      price: data['price'],
      net_price: data['netPrice'],
    }));
});
