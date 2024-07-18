import { z } from 'zod';
import { coordinatesDto, coordinatesDtoRequest, coordinatesDtoResponse } from '../../common/coordinates-dto';
import {
  checkinCheckoutTimesDto,
  checkinCheckoutTimesDtoRequest,
  checkinCheckoutTimesDtoResponse,
} from '../../common/checkin-checkout-times-dto';
import { hotelPhotoDto, hotelPhotoDtoRequest, hotelPhotoDtoResponse } from './hotel-photo-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelDataDto: any = z.lazy(() => {
  return z.object({
    address: z.string().optional(),
    cityId: z.number().optional(),
    country: z.string().optional(),
    location: coordinatesDto.optional(),
    zip: z.string().optional(),
    currency: z.string().optional(),
    checkinCheckoutTimes: checkinCheckoutTimesDto.optional(),
    hotelPhotos: z.array(hotelPhotoDto).optional(),
    hotelDescription: z.string().optional(),
    url: z.string().optional(),
    deepLinkUrl: z.string().optional(),
    regionIds: z.array(z.number()).optional(),
    numberOfReviews: z.number().optional(),
    reviewScore: z.number().multipleOf(0.1).optional(),
    spokenLanguages: z.array(z.string()).optional(),
  });
});

/**
 * Hotel specific information.
 * @typedef  {HotelDataDto} hotelDataDto - Hotel specific information. - Hotel specific information.
 * @property {string} - The street address of the hotel.
 * @property {number} - Id of the city where this property is located.
 * @property {string} - Two-letter ISO country code of the hotel.
 * @property {CoordinatesDto} - A signed integer number that uniquely identifies a city.
 * @property {string} - Hotel ZIP code
 * @property {string} - Three-letter ISO currency code for the hotel.
 * @property {CheckinCheckoutTimesDto}
 * @property {HotelPhotoDto[]} - Photos specific information of the hotel.
 * @property {string} - The description text for this hotel.
 * @property {string} - URL of the hotel's page on Booking.com.
 * @property {string} - Deep link mobile app URL.
 * @property {number[]} - List of region_ids that the hotel belongs to
 * @property {number} - Number of reviews for this hotel.
 * @property {number} - Review score of this hotel.
 * @property {string[]} - Languages spoken by the hotel's staff
 */
export type HotelDataDto = z.infer<typeof hotelDataDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelDataDtoResponse: any = z.lazy(() => {
  return z
    .object({
      address: z.string().optional(),
      city_id: z.number().optional(),
      country: z.string().optional(),
      location: coordinatesDtoResponse.optional(),
      zip: z.string().optional(),
      currency: z.string().optional(),
      checkin_checkout_times: checkinCheckoutTimesDtoResponse.optional(),
      hotel_photos: z.array(hotelPhotoDtoResponse).optional(),
      hotel_description: z.string().optional(),
      url: z.string().optional(),
      deep_link_url: z.string().optional(),
      region_ids: z.array(z.number()).optional(),
      number_of_reviews: z.number().optional(),
      review_score: z.number().multipleOf(0.1).optional(),
      spoken_languages: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      address: data['address'],
      cityId: data['city_id'],
      country: data['country'],
      location: data['location'],
      zip: data['zip'],
      currency: data['currency'],
      checkinCheckoutTimes: data['checkin_checkout_times'],
      hotelPhotos: data['hotel_photos'],
      hotelDescription: data['hotel_description'],
      url: data['url'],
      deepLinkUrl: data['deep_link_url'],
      regionIds: data['region_ids'],
      numberOfReviews: data['number_of_reviews'],
      reviewScore: data['review_score'],
      spokenLanguages: data['spoken_languages'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelDataDtoRequest: any = z.lazy(() => {
  return z
    .object({
      address: z.string().nullish(),
      cityId: z.number().nullish(),
      country: z.string().nullish(),
      location: coordinatesDtoRequest.nullish(),
      zip: z.string().nullish(),
      currency: z.string().nullish(),
      checkinCheckoutTimes: checkinCheckoutTimesDtoRequest.nullish(),
      hotelPhotos: z.array(hotelPhotoDtoRequest).nullish(),
      hotelDescription: z.string().nullish(),
      url: z.string().nullish(),
      deepLinkUrl: z.string().nullish(),
      regionIds: z.array(z.number()).nullish(),
      numberOfReviews: z.number().nullish(),
      reviewScore: z.number().nullish(),
      spokenLanguages: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      address: data['address'],
      city_id: data['cityId'],
      country: data['country'],
      location: data['location'],
      zip: data['zip'],
      currency: data['currency'],
      checkin_checkout_times: data['checkinCheckoutTimes'],
      hotel_photos: data['hotelPhotos'],
      hotel_description: data['hotelDescription'],
      url: data['url'],
      deep_link_url: data['deepLinkUrl'],
      region_ids: data['regionIds'],
      number_of_reviews: data['numberOfReviews'],
      review_score: data['reviewScore'],
      spoken_languages: data['spokenLanguages'],
    }));
});
