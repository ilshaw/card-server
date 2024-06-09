import { ConfigService as NestConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
	constructor(private readonly nestConfigService: NestConfigService) {}

	public getJwtRefreshAlgorithm() {
		return this.nestConfigService.get("JWT_REFRESH_ALGORITHM");
	}

	public getJwtAccessAlgorithm() {
		return this.nestConfigService.get("JWT_ACCESS_ALGORITHM");
	}

	public getJwtRefreshExpires() {
		return this.nestConfigService.get("JWT_REFRESH_EXPIRES");
	}

	public getJwtAccessExpires() {
		return this.nestConfigService.get("JWT_ACCESS_EXPIRES");
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

	public getMinioSsl() {
		return this.nestConfigService.get("MINIO_SSL");
	}

	public getAppPort() {
		return this.nestConfigService.get("APP_PORT");
	}
}