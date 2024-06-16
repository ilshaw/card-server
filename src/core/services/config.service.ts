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

    public getJwtAlgorithmConfirm() {
        return this.nestConfigService.get("JWT_ALGORITHM_CONFIRM");
    }

    public getJwtAlgorithmAccess() {
        return this.nestConfigService.get("JWT_ALGORITHM_ACCESS");
    }

    public getJwtExpiresRefresh() {
        return this.nestConfigService.get("JWT_EXPIRES_REFRESH");
    }

    public getJwtExpiresConfirm() {
        return this.nestConfigService.get("JWT_EXPIRES_CONFIRM");
    }

    public getJwtExpiresAccess() {
        return this.nestConfigService.get("JWT_EXPIRES_ACCESS");
    }

    public getNodemailerSecure() {
        return this.nestConfigService.get("NODEMAILER_SECURE");
    }

    public getNodemailerHost() {
        return this.nestConfigService.get("NODEMAILER_HOST");
    }

    public getNodemailerPort() {
        return this.nestConfigService.get("NODEMAILER_PORT");
    }

    public getNodemailerUser() {
        return this.nestConfigService.get("NODEMAILER_USER");
    }

    public getNodemailerPass() {
        return this.nestConfigService.get("NODEMAILER_PASS");
    }

    public getMinioSecret() {
        return this.nestConfigService.get("MINIO_SECRET");
    }

    public getMinioAccess() {
        return this.nestConfigService.get("MINIO_ACCESS");
    }

    public getMinioHost() {
        return this.nestConfigService.get("MINIO_HOST");
    }

    public getMinioPort() {
        return this.nestConfigService.get("MINIO_PORT");
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

    public getMinioSsl() {
        return this.nestConfigService.get("MINIO_SSL");
    }

    public getAppPort() {
        return this.nestConfigService.get("APP_PORT");
    }
}