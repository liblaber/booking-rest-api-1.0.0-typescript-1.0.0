// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  ConstantInputDto,
  DetailsInputDto,
  ResponseOutputConstantsOutputDto,
  ResponseOutputListDetailsOutputDto,
  ResponseOutputListSearchOutputDto,
  SearchInputDto,
  constantInputDtoRequest,
  detailsInputDtoRequest,
  responseOutputConstantsOutputDtoResponse,
  responseOutputListDetailsOutputDtoResponse,
  responseOutputListSearchOutputDtoResponse,
  searchInputDtoRequest,
} from './models';
import { GetAccommodationConstantsParams, PostDetailsParams, SearchParams } from './request-params';

export class DemandApiV3CompatibleService extends BaseService {
  /**
   * This endpoint returns the cheapest available product for each hotel matching the search criteria.
   * @param {SearchAccept} [accept] -
   * @returns {Promise<HttpResponse<ResponseOutputListSearchOutputDto>>} OK
   */
  async search(
    body: SearchInputDto,
    params?: SearchParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputListSearchOutputDto>> {
    const path = '/demand-api-v3-compatible/search';
    const options: any = {
      responseSchema: responseOutputListSearchOutputDtoResponse,
      requestSchema: searchInputDtoRequest,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.accept) {
      options.headers['Accept'] = params?.accept;
    }
    return this.client.post(path, options);
  }

  /**
 * This endpoint returns detailed information on all accommodation properties matching a given search criteria.By default, only basic information is returned. To receive extended information use the `extras` parameter.
Is is mandatory to pass one of the input parameters: accommodations, airport, city, country or region.

 * @param {PostDetailsAccept} [accept] - 
 * @returns {Promise<HttpResponse<ResponseOutputListDetailsOutputDto>>} OK
 */
  async postDetails(
    body: DetailsInputDto,
    params?: PostDetailsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputListDetailsOutputDto>> {
    const path = '/demand-api-v3-compatible/details';
    const options: any = {
      responseSchema: responseOutputListDetailsOutputDtoResponse,
      requestSchema: detailsInputDtoRequest,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.accept) {
      options.headers['Accept'] = params?.accept;
    }
    return this.client.post(path, options);
  }

  /**
 * This endpoint enumerates the internal codes and names, in the selected languages,for relevant accommodation specific types.

These accommodation specific types include the list of facilities
that may be available at a property like "Elevator" or "Swimmingpool Outdoor".

For example, the following parameters will return
the full list in English (US) and French: `{"languages":"en-us","fr"}`.

To get the full list call the endpoint passing an empty body.
The codes returned are what is used as input and output for other endpoints in the accommodations namespace.

 * @param {GetAccommodationConstantsAccept} [accept] - 
 * @returns {Promise<HttpResponse<ResponseOutputConstantsOutputDto>>} OK
 */
  async getAccommodationConstants(
    body: ConstantInputDto,
    params?: GetAccommodationConstantsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ResponseOutputConstantsOutputDto>> {
    const path = '/demand-api-v3-compatible/constants';
    const options: any = {
      responseSchema: responseOutputConstantsOutputDtoResponse,
      requestSchema: constantInputDtoRequest,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.accept) {
      options.headers['Accept'] = params?.accept;
    }
    return this.client.post(path, options);
  }
}
