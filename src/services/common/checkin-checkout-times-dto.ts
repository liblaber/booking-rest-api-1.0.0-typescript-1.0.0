// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { localTime, localTimeRequest, localTimeResponse } from './local-time';

/**
 * The shape of the model inside the application code - what the users use
 */
export const checkinCheckoutTimesDto: any = z.lazy(() => {
  return z.object({
    checkinFrom: localTime.optional(),
    checkinTo: localTime.optional(),
    checkoutFrom: localTime.optional(),
    checkoutTo: localTime.optional(),
  });
});

/**
 *
 * @typedef  {CheckinCheckoutTimesDto} checkinCheckoutTimesDto
 * @property {LocalTime} - The time till when checkout can be done at this property.
 * @property {LocalTime} - The time till when checkout can be done at this property.
 * @property {LocalTime} - The time till when checkout can be done at this property.
 * @property {LocalTime} - The time till when checkout can be done at this property.
 */
export type CheckinCheckoutTimesDto = z.infer<typeof checkinCheckoutTimesDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const checkinCheckoutTimesDtoResponse: any = z.lazy(() => {
  return z
    .object({
      checkin_from: localTimeResponse.optional(),
      checkin_to: localTimeResponse.optional(),
      checkout_from: localTimeResponse.optional(),
      checkout_to: localTimeResponse.optional(),
    })
    .transform((data) => ({
      checkinFrom: data['checkin_from'],
      checkinTo: data['checkin_to'],
      checkoutFrom: data['checkout_from'],
      checkoutTo: data['checkout_to'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const checkinCheckoutTimesDtoRequest: any = z.lazy(() => {
  return z
    .object({
      checkinFrom: localTimeRequest.nullish(),
      checkinTo: localTimeRequest.nullish(),
      checkoutFrom: localTimeRequest.nullish(),
      checkoutTo: localTimeRequest.nullish(),
    })
    .transform((data) => ({
      checkin_from: data['checkinFrom'],
      checkin_to: data['checkinTo'],
      checkout_from: data['checkoutFrom'],
      checkout_to: data['checkoutTo'],
    }));
});
