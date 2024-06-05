import { ConfigService as NestConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
	constructor(private readonly nestConfigService: NestConfigService) {}

	public getPort() {
		return this.nestConfigService.get("PORT");
	}
}