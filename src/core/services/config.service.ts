import { ConfigService as NestConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
    constructor(private readonly nestConfigService: NestConfigService) {}

    public getCookieExpiresRefresh() {
        return this.nestConfigService.get("COOKIE_EXPIRES_REFRESH");
    }

    public getCookieExpiresAccess() {
        return this.nestConfigService.get("COOKIE_EXPIRES_ACCESS");
    }

    public getJwtAlgorithmRefresh() {
        return this.nestConfigService.get("JWT_ALGORITHM_REFRESH");
    }

    public getJwtAlgorithmAccess() {
        return this.nestConfigService.get("JWT_ALGORITHM_ACCESS");
    }

    public getJwtExpiresRefresh() {
        return this.nestConfigService.get("JWT_EXPIRES_REFRESH");
    }

    public getJwtExpiresAccess() {
        return this.nestConfigService.get("JWT_EXPIRES_ACCESS");
    }

    public getRedisPort() {
        return this.nestConfigService.get("REDIS_PORT");
    }

    public getRedisHost() {
        return this.nestConfigService.get("REDIS_HOST");
    }

    public getRedisPass() {
        return this.nestConfigService.get("REDIS_PASS");
    }

    public getAppPort() {
        return this.nestConfigService.get("APP_PORT");
    }
}