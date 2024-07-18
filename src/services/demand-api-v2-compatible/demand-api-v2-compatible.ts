import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  ResponseOutputV2ReviewScoresOutputDto,
  responseOutputV2ReviewScoresOutputDtoResponse,
} from './models/response-output-v2-review-scores-output-dto';
import {
  GetBlockAvailabilityParams,
  GetHotelAvailabilityParams,
  GetHotelThemeTypesParams,
  GetHotelTypesParams,
  GetHotelsParams,
  GetHotelsReviewScoresParams,
  GetRoomFacilityTypesParams,
} from './request-params';
import {
  ResponseOutputV2HotelsOutputDto,
  responseOutputV2HotelsOutputDtoResponse,
} from './models/response-output-v2-hotels-output-dto';
import {
  ResponseOutputV2HotelTypesOutputDto,
  responseOutputV2HotelTypesOutputDtoResponse,
} from './models/response-output-v2-hotel-types-output-dto';
import {
  ResponseOutputV2HotelThemeTypesOutputDto,
  responseOutputV2HotelThemeTypesOutputDtoResponse,
} from './models/response-output-v2-hotel-theme-types-output-dto';
import {
  ResponseOutputV2HotelFacilityTypeOutputDto,
  responseOutputV2HotelFacilityTypeOutputDtoResponse,
} from './models/response-output-v2-hotel-facility-type-output-dto';
import {
  ResponseOutputV2HotelAvailabilityOutputDto,
  responseOutputV2HotelAvailabilityOutputDtoResponse,
} from './models/response-output-v2-hotel-availability-output-dto';
import {
  ResponseOutputV2BlockAvailabilityOutputDto,
  responseOutputV2BlockAvailabilityOutputDtoResponse,
} from './models/response-output-v2-block-availability-output-dto';

export class DemandApiV2CompatibleService extends BaseService {
  /**
 * Gives information about review scores for specified hotel_ids and filter.The information consists of score breakdown per reviewer_type and review questions,
and overall score distribution per score value (1 - 10).

The available filter is input parameter reviewer_type=... .
It allows generating review score information for just one reviewer type.

Language in which the response is rendered can be controlled with the input parameter language=...
(default: 'en'). Setting the language will reflect on the output fields question and review_score_word.

One additional output field can be requested with input parameter extras=review_score_word.

 * @param {ReviewScoresInputDto} reviewScoresInputDto - 
 * @param {GetHotelsReviewScoresAccept} [accept] - 
 * @returns {Promise<HttpResponse<ResponseOutputV2ReviewScoresOutputDto>>} OK
 */
  async getHotelsReviewScores(
    params: GetHotelsReviewScoresParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputV2ReviewScoresOutputDto>> {
    const request = new Request({
      method: 'GET',
      path: '/demand-api-v2-compatible/reviewScores',
      config: this.config,
      responseSchema: responseOutputV2ReviewScoresOutputDtoResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('reviewScoresInputDto', params?.reviewScoresInputDto);
    request.addHeaderParam('Accept', params?.accept);
    return this.client.call(request);
  }

  /**
 * This call returns the hotel and room data. By default, only hotel_id is returned in the output.
One of the argument: hotel_ids, city_ids, country_ids, region_ids, district_ids, chain_ids is mandatory.

Additional data needs to be requested via extras parameter.

The data is returned in English by default.

 * @param {HotelsInputDto} hotelsInput - 
 * @param {GetHotelsAccept} [accept] - 
 * @returns {Promise<HttpResponse<ResponseOutputV2HotelsOutputDto>>} OK
 */
  async getHotels(
    params: GetHotelsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputV2HotelsOutputDto>> {
    const request = new Request({
      method: 'GET',
      path: '/demand-api-v2-compatible/hotels',
      config: this.config,
      responseSchema: responseOutputV2HotelsOutputDtoResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('hotelsInput', params?.hotelsInput);
    request.addHeaderParam('Accept', params?.accept);
    return this.client.call(request);
  }

  /**
   * This endpoint returns hotel types names and their translations. (EN is default)
   * @param {HotelTypeInputDto} hotelTypeInputDto -
   * @param {GetHotelTypesAccept} [accept] -
   * @returns {Promise<HttpResponse<ResponseOutputV2HotelTypesOutputDto>>} OK
   */
  async getHotelTypes(
    params: GetHotelTypesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputV2HotelTypesOutputDto>> {
    const request = new Request({
      method: 'GET',
      path: '/demand-api-v2-compatible/hotelTypes',
      config: this.config,
      responseSchema: responseOutputV2HotelTypesOutputDtoResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('hotelTypeInputDTO', params?.hotelTypeInputDto);
    request.addHeaderParam('Accept', params?.accept);
    return this.client.call(request);
  }

  /**
   * This endpoint returns a list of hotel theme types (in English).
   * @param {HotelThemeTypeInputDto} hotelThemeTypeInputDto -
   * @param {GetHotelThemeTypesAccept} [accept] -
   * @returns {Promise<HttpResponse<ResponseOutputV2HotelThemeTypesOutputDto>>} OK
   */
  async getHotelThemeTypes(
    params: GetHotelThemeTypesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputV2HotelThemeTypesOutputDto>> {
    const request = new Request({
      method: 'GET',
      path: '/demand-api-v2-compatible/hotelThemeTypes',
      config: this.config,
      responseSchema: responseOutputV2HotelThemeTypesOutputDtoResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('hotelThemeTypeInputDTO', params?.hotelThemeTypeInputDto);
    request.addHeaderParam('Accept', params?.accept);
    return this.client.call(request);
  }

  /**
   * This endpoint returns room facility types names and their translations (EN is default).
   * @param {HotelFacilityInputDto} hotelFacilityInputDto -
   * @param {GetRoomFacilityTypesAccept} [accept] -
   * @returns {Promise<HttpResponse<ResponseOutputV2HotelFacilityTypeOutputDto>>} OK
   */
  async getRoomFacilityTypes(
    params: GetRoomFacilityTypesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputV2HotelFacilityTypeOutputDto>> {
    const request = new Request({
      method: 'GET',
      path: '/demand-api-v2-compatible/hotelFacilityTypes',
      config: this.config,
      responseSchema: responseOutputV2HotelFacilityTypeOutputDtoResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('hotelFacilityInputDto', params?.hotelFacilityInputDto);
    request.addHeaderParam('Accept', params?.accept);
    return this.client.call(request);
  }

  /**
 * This endpoint returns the cheapest available room for each hotel matching your check-in and check-out dates.You can search for hotels in a city, or for a specific list of (upto 300) hotels by hotel_ids.
Here you will find whether the price included breakfast or other meals, as well as whether it is possible to cancel for free.
It is possible to have a breakdown of the price returned by this endpoint and to filter by property types and/or hotel facilities.

 * @param {HotelAvailabilityInputDto} hotelAvailabilityInputDto - 
 * @param {GetHotelAvailabilityAccept} [accept] - 
 * @returns {Promise<HttpResponse<ResponseOutputV2HotelAvailabilityOutputDto>>} OK
 */
  async getHotelAvailability(
    params: GetHotelAvailabilityParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputV2HotelAvailabilityOutputDto>> {
    const request = new Request({
      method: 'GET',
      path: '/demand-api-v2-compatible/hotelAvailability',
      config: this.config,
      responseSchema: responseOutputV2HotelAvailabilityOutputDtoResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('hotelAvailabilityInputDto', params?.hotelAvailabilityInputDto);
    request.addHeaderParam('Accept', params?.accept);
    return this.client.call(request);
  }

  /**
 * This endpoint is where you find a list of all bookable or available rooms at a property.A room can have multiple blocks, as a block is a combination of the meal, cancellation policy, occupancy and other things.
You can find detailed information about one hotel per search (detail_level)
which will return most of the information needed to replicate the booking.com property page.

If you want to search multiple hotels, you can, but you get less detail.
For searching multiple hotels, it is recommended to use hotelAvailability.

 * @param {BlockAvailabilityInputDto} blockInput - 
 * @param {GetBlockAvailabilityAccept} [accept] - 
 * @returns {Promise<HttpResponse<ResponseOutputV2BlockAvailabilityOutputDto>>} OK
 */
  async getBlockAvailability(
    params: GetBlockAvailabilityParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputV2BlockAvailabilityOutputDto>> {
    const request = new Request({
      method: 'GET',
      path: '/demand-api-v2-compatible/blockAvailability',
      config: this.config,
      responseSchema: responseOutputV2BlockAvailabilityOutputDtoResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('blockInput', params?.blockInput);
    request.addHeaderParam('Accept', params?.accept);
    return this.client.call(request);
  }
}
