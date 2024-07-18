import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';

export class AuthHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    const requestWithAuth = this.addApiKeyHeader(this.addAccessTokenHeader(request));

    if (!this.next) {
      throw new Error(`No next handler set in ${AuthHandler.name}`);
    }

    return this.next?.handle(requestWithAuth);
  }

  private addAccessTokenHeader<T>(request: Request<T>): Request<T> {
    const { token } = request.config;
    if (!token) {
      return request;
    }

    request.headers.set('Authorization', `Bearer ${token}`);

    return request;
  }

  private addApiKeyHeader<T>(request: Request<T>): Request<T> {
    const apiKey = request.config?.apiKey;
    const apiKeyHeader = request.config?.apiKeyHeader ?? 'my-api-key-header';
    if (!apiKey) {
      return request;
    }

    request.addHeaderParam(apiKeyHeader, apiKey);

    return request;
  }
}
