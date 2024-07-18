import { z } from 'zod';
import { blockAvailabilityInputDtoExtras } from './block-availability-input-dto-extras';
import { blockAvailabilityInputDtoLanguage } from './block-availability-input-dto-language';
import { blockAvailabilityInputDtoUserPlatform } from './block-availability-input-dto-user-platform';

/**
 * The shape of the model inside the application code - what the users use
 */
export const blockAvailabilityInputDto: any = z.lazy(() => {
  return z.object({
    hotelIds: z.array(z.number()),
    checkin: z.string(),
    checkout: z.string(),
    guestCc: z.string(),
    currency: z.string().optional(),
    extras: z.array(blockAvailabilityInputDtoExtras).optional(),
    affiliateId: z.string().optional(),
    blockIds: z.array(z.string()).optional(),
    guestIp: z.string().optional(),
    guestQty: z.array(z.number()).optional(),
    language: blockAvailabilityInputDtoLanguage.optional(),
    numRooms: z.number().optional(),
    room1: z.array(z.string()).optional(),
    userPlatform: blockAvailabilityInputDtoUserPlatform.optional(),
  });
});

/**
 * 
 * @typedef  {BlockAvailabilityInputDto} blockAvailabilityInputDto   
 * @property {number[]} - Hotel ID(s) to check availability for.
 * @property {string} - The arrival date.
 * @property {string} - The departure date. Must be later than (checkin).
 * @property {string} - Guest country code. Used to accurately display the best prices and price details for people from that country.
 * @property {string} - Returns the prices in this currency, in addition to the hotel currency.
 * @property {BlockAvailabilityInputDtoExtras[]} - The extra items for this request. See the documentation for more details about each extra.
 * @property {string} - Application affiliate id
 * @property {string[]} - Return only availability hits with these particular block IDs
 * @property {string} - Guest IP address for determining guest country
and showing the best price for that user and obeying laws regarding the display of taxes and fees.

 * @property {number[]} - Number of guests for which blocks will be found.
The total number of guests is used for calculating city tax charges.
It is specified as an array of guest numbers.

If you use this parameter and make bookings through the API,
you should also set the exact same value in the guest_quantities parameter
for the processBooking call, otherwise per-person included charges may result in
pricing problems, causing the booking to fail.

NOTE: After version 2.6 either this or `room1` needs to be provided.

 * @property {BlockAvailabilityInputDtoLanguage} - Specify the language for: block_id, policies, room texts and hotel descriptions.

Note: not all text is translated in all languages.
Please check the "Possible Values" section of the documentation for the accepted language codes.

 * @property {number} - Takes a number of rooms to put guests into
 * @property {string[]} - Which guests to put in which rooms. Syntax: comma-separated list, `A` for each adult, a number in the range 0..17 for each child.

 * @property {BlockAvailabilityInputDtoUserPlatform} - The user's platform.
 */
export type BlockAvailabilityInputDto = z.infer<typeof blockAvailabilityInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const blockAvailabilityInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      hotel_ids: z.array(z.number()),
      checkin: z.string(),
      checkout: z.string(),
      guest_cc: z.string(),
      currency: z.string().optional(),
      extras: z.array(blockAvailabilityInputDtoExtras).optional(),
      affiliate_id: z.string().optional(),
      block_ids: z.array(z.string()).optional(),
      guest_ip: z.string().optional(),
      guest_qty: z.array(z.number()).optional(),
      language: blockAvailabilityInputDtoLanguage.optional(),
      num_rooms: z.number().optional(),
      room1: z.array(z.string()).optional(),
      user_platform: blockAvailabilityInputDtoUserPlatform.optional(),
    })
    .transform((data) => ({
      hotelIds: data['hotel_ids'],
      checkin: data['checkin'],
      checkout: data['checkout'],
      guestCc: data['guest_cc'],
      currency: data['currency'],
      extras: data['extras'],
      affiliateId: data['affiliate_id'],
      blockIds: data['block_ids'],
      guestIp: data['guest_ip'],
      guestQty: data['guest_qty'],
      language: data['language'],
      numRooms: data['num_rooms'],
      room1: data['room1'],
      userPlatform: data['user_platform'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const blockAvailabilityInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      hotelIds: z.array(z.number()).nullish(),
      checkin: z.string().nullish(),
      checkout: z.string().nullish(),
      guestCc: z.string().nullish(),
      currency: z.string().nullish(),
      extras: z.array(blockAvailabilityInputDtoExtras).nullish(),
      affiliateId: z.string().nullish(),
      blockIds: z.array(z.string()).nullish(),
      guestIp: z.string().nullish(),
      guestQty: z.array(z.number()).nullish(),
      language: blockAvailabilityInputDtoLanguage.nullish(),
      numRooms: z.number().nullish(),
      room1: z.array(z.string()).nullish(),
      userPlatform: blockAvailabilityInputDtoUserPlatform.nullish(),
    })
    .transform((data) => ({
      hotel_ids: data['hotelIds'],
      checkin: data['checkin'],
      checkout: data['checkout'],
      guest_cc: data['guestCc'],
      currency: data['currency'],
      extras: data['extras'],
      affiliate_id: data['affiliateId'],
      block_ids: data['blockIds'],
      guest_ip: data['guestIp'],
      guest_qty: data['guestQty'],
      language: data['language'],
      num_rooms: data['numRooms'],
      room1: data['room1'],
      user_platform: data['userPlatform'],
    }));
});
