import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { SearchInputDto, searchInputDtoRequest } from './models/search-input-dto';
import {
  ResponseOutputListSearchOutputDto,
  responseOutputListSearchOutputDtoResponse,
} from './models/response-output-list-search-output-dto';
import { GetAccommodationConstantsParams, PostDetailsParams, SearchParams } from './request-params';
import { DetailsInputDto, detailsInputDtoRequest } from './models/details-input-dto';
import {
  ResponseOutputListDetailsOutputDto,
  responseOutputListDetailsOutputDtoResponse,
} from './models/response-output-list-details-output-dto';
import { ConstantInputDto, constantInputDtoRequest } from './models/constant-input-dto';
import {
  ResponseOutputConstantsOutputDto,
  responseOutputConstantsOutputDtoResponse,
} from './models/response-output-constants-output-dto';

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
    const request = new Request({
      method: 'POST',
      body,
      path: '/demand-api-v3-compatible/search',
      config: this.config,
      responseSchema: responseOutputListSearchOutputDtoResponse,
      requestSchema: searchInputDtoRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Accept', params?.accept);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
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
    const request = new Request({
      method: 'POST',
      body,
      path: '/demand-api-v3-compatible/details',
      config: this.config,
      responseSchema: responseOutputListDetailsOutputDtoResponse,
      requestSchema: detailsInputDtoRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Accept', params?.accept);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
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
    const request = new Request({
      method: 'POST',
      body,
      path: '/demand-api-v3-compatible/constants',
      config: this.config,
      responseSchema: responseOutputConstantsOutputDtoResponse,
      requestSchema: constantInputDtoRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Accept', params?.accept);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }
}
