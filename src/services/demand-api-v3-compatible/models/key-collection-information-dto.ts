import { z } from 'zod';
import {
  alternativeKeyLocationDto,
  alternativeKeyLocationDtoRequest,
  alternativeKeyLocationDtoResponse,
} from './alternative-key-location-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const keyCollectionInformationDto: any = z.lazy(() => {
  return z.object({
    alternateLocation: alternativeKeyLocationDto.optional(),
    checkinMethod: z.string().optional(),
    keyLocation: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {KeyCollectionInformationDto} keyCollectionInformationDto   
 * @property {AlternativeKeyLocationDto} - Alternate location to collect the key of this accommodation property.
This is returned if the key to access the property is in another location.

 * @property {string} - An enumeration that describes the conditions for the checkin process and for collecting the key to access the property.
This is typically relevant for non-hotel accommodations (like houses or apartments) without a 24 hours front-desk.

 * @property {string} - Location of the key to access this accommodation property.
 */
export type KeyCollectionInformationDto = z.infer<typeof keyCollectionInformationDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const keyCollectionInformationDtoResponse: any = z.lazy(() => {
  return z
    .object({
      alternate_location: alternativeKeyLocationDtoResponse.optional(),
      checkin_method: z.string().optional(),
      key_location: z.string().optional(),
    })
    .transform((data) => ({
      alternateLocation: data['alternate_location'],
      checkinMethod: data['checkin_method'],
      keyLocation: data['key_location'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const keyCollectionInformationDtoRequest: any = z.lazy(() => {
  return z
    .object({
      alternateLocation: alternativeKeyLocationDtoRequest.nullish(),
      checkinMethod: z.string().nullish(),
      keyLocation: z.string().nullish(),
    })
    .transform((data) => ({
      alternate_location: data['alternateLocation'],
      checkin_method: data['checkinMethod'],
      key_location: data['keyLocation'],
    }));
});
