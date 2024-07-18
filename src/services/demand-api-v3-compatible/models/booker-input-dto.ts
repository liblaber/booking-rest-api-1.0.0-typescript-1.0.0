// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { platform } from './platform';
import { travelPurpose } from './travel-purpose';
import { userGroups } from './user-groups';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bookerInputDto: any = z.lazy(() => {
  return z.object({
    country: z.string().regex(/^[a-z]{2}$/),
    platform: platform,
    travelPurpose: travelPurpose.optional(),
    userGroups: z.array(userGroups).optional(),
  });
});

/**
 * The booker's information.
 * @typedef  {BookerInputDto} bookerInputDto - The booker's information. - The booker's information.
 * @property {string} - The booker country for showing the best price for that user and obeying laws regarding the display of taxes and fees.
 * @property {Platform} - The booker platform for showing the platform based deals and prices.
 * @property {TravelPurpose} - The travel purpose of the booker.
 * @property {UserGroups[]} - The user groups that the booker is a member of.
 */
export type BookerInputDto = z.infer<typeof bookerInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bookerInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      country: z.string().regex(/^[a-z]{2}$/),
      platform: platform,
      travel_purpose: travelPurpose.optional(),
      user_groups: z.array(userGroups).optional(),
    })
    .transform((data) => ({
      country: data['country'],
      platform: data['platform'],
      travelPurpose: data['travel_purpose'],
      userGroups: data['user_groups'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bookerInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      country: z.string().nullish(),
      platform: platform.nullish(),
      travelPurpose: travelPurpose.nullish(),
      userGroups: z.array(userGroups).nullish(),
    })
    .transform((data) => ({
      country: data['country'],
      platform: data['platform'],
      travel_purpose: data['travelPurpose'],
      user_groups: data['userGroups'],
    }));
});
