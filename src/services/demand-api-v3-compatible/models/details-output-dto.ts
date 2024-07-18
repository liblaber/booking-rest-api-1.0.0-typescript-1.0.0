import { z } from 'zod';
import { translatedString, translatedStringRequest, translatedStringResponse } from './translated-string';
import {
  checkinCheckoutTimesDto,
  checkinCheckoutTimesDtoRequest,
  checkinCheckoutTimesDtoResponse,
} from '../../common/checkin-checkout-times-dto';
import { contactsDto, contactsDtoRequest, contactsDtoResponse } from './contacts-dto';
import { facilityDto, facilityDtoRequest, facilityDtoResponse } from './facility-dto';
import { descriptionDto, descriptionDtoRequest, descriptionDtoResponse } from './description-dto';
import {
  keyCollectionInformationDto,
  keyCollectionInformationDtoRequest,
  keyCollectionInformationDtoResponse,
} from './key-collection-information-dto';
import { locationDto, locationDtoRequest, locationDtoResponse } from './location-dto';
import { paymentDto, paymentDtoRequest, paymentDtoResponse } from './payment-dto';
import { photoDto, photoDtoRequest, photoDtoResponse } from './photo-dto';
import { policiesDto, policiesDtoRequest, policiesDtoResponse } from './policies-dto';
import { programSettingsDto, programSettingsDtoRequest, programSettingsDtoResponse } from './program-settings-dto';
import { ratingDto, ratingDtoRequest, ratingDtoResponse } from './rating-dto';
import { roomDto, roomDtoRequest, roomDtoResponse } from './room-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const detailsOutputDto: any = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    name: translatedString.optional(),
    accommodationType: z.number().optional(),
    brands: z.array(z.number()).optional(),
    checkinCheckoutTimes: checkinCheckoutTimesDto.optional(),
    contacts: contactsDto.optional(),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .optional(),
    facilities: z.array(facilityDto).optional(),
    deepLinkUrl: z.string().optional(),
    description: descriptionDto.optional(),
    isWorkFriendly: z.boolean().optional(),
    keyCollectionInformation: z.array(keyCollectionInformationDto).optional(),
    location: locationDto.optional(),
    numberOfRooms: z.number().optional(),
    payment: paymentDto.optional(),
    photos: z.array(photoDto).optional(),
    policies: policiesDto.optional(),
    priceCategory: z
      .string()
      .regex(/[$]{0,4}/)
      .optional(),
    programmes: programSettingsDto.optional(),
    rating: ratingDto.optional(),
    rooms: z.array(roomDto).optional(),
    spokenLanguages: z.array(z.string()).optional(),
    themes: z.array(z.number()).optional(),
    url: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {DetailsOutputDto} detailsOutputDto   
 * @property {number} - A signed integer number that uniquely identifies an accommodation property.
 * @property {TranslatedString} - Translated description of this room. The maximum number of characters returned may be limited by contract.
 * @property {number} - A signed integer number that uniquely identifies an accommodation property type.
Examples of accommodation types are: Apartment, Hostel, Hotel etc.
 * @property {number[]} - A signed integer number that uniquely identifies an accommodation brand.
 * @property {CheckinCheckoutTimesDto} 
 * @property {ContactsDto} - Contact information of the accommodation.
 * @property {string} - A three-letter code that uniquely identifies a monetary currency as defined by the ISO 4217 standard.
 * @property {FacilityDto[]} - The list of facilities available in this property. Requires `{"extras":["facilities"]}`.
 * @property {string} - Deep link mobile app URL.
 * @property {DescriptionDto} - Textual information about the accommodation. Requires `{"extras":["description"]}`.
 * @property {boolean} - Flags if this accommodation is work friendly.
 * @property {KeyCollectionInformationDto[]} 
 * @property {LocationDto} - All location related information of this accommodation property.
 * @property {number} - Total number of rooms in the property.
Please note that this is not an availability call and that this number is mostly used to determine the size and type of a property.

 * @property {PaymentDto} - Payment terms and conditions for this product.
 * @property {PhotoDto[]} - List of photos for this accommodation property.The maximum number of photos returned may be limited by contract.
Requires `{"extras":["photos"]}`. The photos are returned in no particular order.
 * @property {PoliciesDto} - The policies for this product.
 * @property {string} - Indicates the qualitative price reference (between $ and $$$$) on how expensive an accommodation is.
Accommodations in the same city are sorted by ascending price (average per guest per night in the last month),
the ones in the lowest 25 percentile are in category $, between 25 and 50 percentile are in category $$,
between 50 and 75 percentile are in category $$$, remaining ones are in category $$$$.
 * @property {ProgramSettingsDto} - Details of programmes undergone by the property.
 * @property {RatingDto} 
 * @property {RoomDto[]} - The list of room types available at this property. Requires `{"extras":["rooms"]}`.
 * @property {string[]} 
 * @property {number[]} 
 * @property {string} 
 */
export type DetailsOutputDto = z.infer<typeof detailsOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const detailsOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: translatedStringResponse.optional(),
      accommodation_type: z.number().optional(),
      brands: z.array(z.number()).optional(),
      checkin_checkout_times: checkinCheckoutTimesDtoResponse.optional(),
      contacts: contactsDtoResponse.optional(),
      currency: z
        .string()
        .regex(/^[A-Z]{3}$/)
        .optional(),
      facilities: z.array(facilityDtoResponse).optional(),
      deep_link_url: z.string().optional(),
      description: descriptionDtoResponse.optional(),
      is_work_friendly: z.boolean().optional(),
      key_collection_information: z.array(keyCollectionInformationDtoResponse).optional(),
      location: locationDtoResponse.optional(),
      number_of_rooms: z.number().optional(),
      payment: paymentDtoResponse.optional(),
      photos: z.array(photoDtoResponse).optional(),
      policies: policiesDtoResponse.optional(),
      price_category: z
        .string()
        .regex(/[$]{0,4}/)
        .optional(),
      programmes: programSettingsDtoResponse.optional(),
      rating: ratingDtoResponse.optional(),
      rooms: z.array(roomDtoResponse).optional(),
      spoken_languages: z.array(z.string()).optional(),
      themes: z.array(z.number()).optional(),
      url: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      accommodationType: data['accommodation_type'],
      brands: data['brands'],
      checkinCheckoutTimes: data['checkin_checkout_times'],
      contacts: data['contacts'],
      currency: data['currency'],
      facilities: data['facilities'],
      deepLinkUrl: data['deep_link_url'],
      description: data['description'],
      isWorkFriendly: data['is_work_friendly'],
      keyCollectionInformation: data['key_collection_information'],
      location: data['location'],
      numberOfRooms: data['number_of_rooms'],
      payment: data['payment'],
      photos: data['photos'],
      policies: data['policies'],
      priceCategory: data['price_category'],
      programmes: data['programmes'],
      rating: data['rating'],
      rooms: data['rooms'],
      spokenLanguages: data['spoken_languages'],
      themes: data['themes'],
      url: data['url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const detailsOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      name: translatedStringRequest.nullish(),
      accommodationType: z.number().nullish(),
      brands: z.array(z.number()).nullish(),
      checkinCheckoutTimes: checkinCheckoutTimesDtoRequest.nullish(),
      contacts: contactsDtoRequest.nullish(),
      currency: z.string().nullish(),
      facilities: z.array(facilityDtoRequest).nullish(),
      deepLinkUrl: z.string().nullish(),
      description: descriptionDtoRequest.nullish(),
      isWorkFriendly: z.boolean().nullish(),
      keyCollectionInformation: z.array(keyCollectionInformationDtoRequest).nullish(),
      location: locationDtoRequest.nullish(),
      numberOfRooms: z.number().nullish(),
      payment: paymentDtoRequest.nullish(),
      photos: z.array(photoDtoRequest).nullish(),
      policies: policiesDtoRequest.nullish(),
      priceCategory: z.string().nullish(),
      programmes: programSettingsDtoRequest.nullish(),
      rating: ratingDtoRequest.nullish(),
      rooms: z.array(roomDtoRequest).nullish(),
      spokenLanguages: z.array(z.string()).nullish(),
      themes: z.array(z.number()).nullish(),
      url: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      accommodation_type: data['accommodationType'],
      brands: data['brands'],
      checkin_checkout_times: data['checkinCheckoutTimes'],
      contacts: data['contacts'],
      currency: data['currency'],
      facilities: data['facilities'],
      deep_link_url: data['deepLinkUrl'],
      description: data['description'],
      is_work_friendly: data['isWorkFriendly'],
      key_collection_information: data['keyCollectionInformation'],
      location: data['location'],
      number_of_rooms: data['numberOfRooms'],
      payment: data['payment'],
      photos: data['photos'],
      policies: data['policies'],
      price_category: data['priceCategory'],
      programmes: data['programmes'],
      rating: data['rating'],
      rooms: data['rooms'],
      spoken_languages: data['spokenLanguages'],
      themes: data['themes'],
      url: data['url'],
    }));
});
