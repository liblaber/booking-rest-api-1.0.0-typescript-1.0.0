import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { DemandApiV3CompatibleService } from './services/demand-api-v3-compatible';
import { DemandApiV2CompatibleService } from './services/demand-api-v2-compatible';

export class Booking {
  public readonly demandApiV3Compatible: DemandApiV3CompatibleService;

  public readonly demandApiV2Compatible: DemandApiV2CompatibleService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.demandApiV3Compatible = new DemandApiV3CompatibleService(this.config);

    this.demandApiV2Compatible = new DemandApiV2CompatibleService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.demandApiV3Compatible.baseUrl = baseUrl;
    this.demandApiV2Compatible.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.demandApiV3Compatible.baseUrl = environment;
    this.demandApiV2Compatible.baseUrl = environment;
  }

  set timeout(timeout: number) {
    this.demandApiV3Compatible.timeout = timeout;
    this.demandApiV2Compatible.timeout = timeout;
  }

  set token(token: string) {
    this.demandApiV3Compatible.token = token;
    this.demandApiV2Compatible.token = token;
  }

  set apiKey(apiKey: string) {
    this.demandApiV3Compatible.apiKey = apiKey;
    this.demandApiV2Compatible.apiKey = apiKey;
  }

  set apiKeyHeader(apiKeyHeader: string) {
    this.demandApiV3Compatible.apiKeyHeader = apiKeyHeader;
    this.demandApiV2Compatible.apiKeyHeader = apiKeyHeader;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
