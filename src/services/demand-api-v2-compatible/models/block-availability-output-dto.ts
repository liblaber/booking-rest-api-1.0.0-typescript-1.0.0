import { z } from 'zod';
import { blockOutputDto, blockOutputDtoRequest, blockOutputDtoResponse } from './block-output-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const blockAvailabilityOutputDto: any = z.lazy(() => {
  return z.object({
    block: z.array(blockOutputDto).optional(),
    canPayNow: z.boolean().optional(),
    checkin: z.string().optional(),
    checkout: z.string().optional(),
    directPayment: z.boolean().optional(),
    hotelId: z.number().optional(),
    hotelUrl: z.string().optional(),
    isFlashDeal: z.boolean().optional(),
    flashDeal: z.boolean().optional(),
  });
});

/**
 * 
 * @typedef  {BlockAvailabilityOutputDto} blockAvailabilityOutputDto   
 * @property {BlockOutputDto[]} - The object containing all the relevant information for the combination of room, policy, meal and occupancy that determines the price."
A block is the unique entity you book with booking.com.
 * @property {boolean} - Boolean value set to "true" if payment can be made during reservation process or "false" if it can not.
 * @property {string} - The date that was searched for as checkin. Format: YYYY-MM-DD
 * @property {string} - The date that was searched for as checkout. Format: YYYY-MM-DD
 * @property {boolean} - Boolean value set to "true" if the direct payment is available or "false" if it is not.
 * @property {number} - Booking.com hotel ID. The unique identifier of this hotel.
 * @property {string} - URL of the hotel's page on Booking.com.
 * @property {boolean} 
 * @property {boolean} 
 */
export type BlockAvailabilityOutputDto = z.infer<typeof blockAvailabilityOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const blockAvailabilityOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      block: z.array(blockOutputDtoResponse).optional(),
      can_pay_now: z.boolean().optional(),
      checkin: z.string().optional(),
      checkout: z.string().optional(),
      direct_payment: z.boolean().optional(),
      hotel_id: z.number().optional(),
      hotel_url: z.string().optional(),
      isFlashDeal: z.boolean().optional(),
      flash_deal: z.boolean().optional(),
    })
    .transform((data) => ({
      block: data['block'],
      canPayNow: data['can_pay_now'],
      checkin: data['checkin'],
      checkout: data['checkout'],
      directPayment: data['direct_payment'],
      hotelId: data['hotel_id'],
      hotelUrl: data['hotel_url'],
      isFlashDeal: data['isFlashDeal'],
      flashDeal: data['flash_deal'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const blockAvailabilityOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      block: z.array(blockOutputDtoRequest).nullish(),
      canPayNow: z.boolean().nullish(),
      checkin: z.string().nullish(),
      checkout: z.string().nullish(),
      directPayment: z.boolean().nullish(),
      hotelId: z.number().nullish(),
      hotelUrl: z.string().nullish(),
      isFlashDeal: z.boolean().nullish(),
      flashDeal: z.boolean().nullish(),
    })
    .transform((data) => ({
      block: data['block'],
      can_pay_now: data['canPayNow'],
      checkin: data['checkin'],
      checkout: data['checkout'],
      direct_payment: data['directPayment'],
      hotel_id: data['hotelId'],
      hotel_url: data['hotelUrl'],
      isFlashDeal: data['isFlashDeal'],
      flash_deal: data['flashDeal'],
    }));
});
