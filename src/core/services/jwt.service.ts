import { JwtService as NestJwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";

import { RefreshPayloadInterface } from "@common/interfaces/refresh-payload.interface";
import { AccessPayloadInterface } from "@common/interfaces/access-payload.interface";

@Injectable()
export class JwtService {
	constructor(private readonly nestJwtService: NestJwtService) {}

	public async signRefresh(payload: RefreshPayloadInterface) {
		return this.nestJwtService.signAsync(payload, { expiresIn: 365 * 24 * 60 * 60, algorithm: "RS256" });
	}

	public async signAccess(payload: AccessPayloadInterface) {
		return this.nestJwtService.signAsync(payload, { expiresIn: 10 * 60, algorithm: "RS256" });
	}
}