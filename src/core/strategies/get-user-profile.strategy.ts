import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

import { Strategy, ExtractJwt } from "passport-jwt";
import { FastifyRequest } from "fastify";

import { AccessPayloadInterface } from "@common/interfaces/access-payload.interface";
import { ExceptionService } from "@core/services/exception.service";
import { UserRepository } from "@core/repositories/user.repository";
import { KeyService } from "@core/services/key.service";

@Injectable()
export class GetUserProfileStrategy extends PassportStrategy(Strategy, "get-user-profile") {
	constructor(
		private readonly exceptionService: ExceptionService, 
		private readonly userRepository: UserRepository,
		private readonly keyService: KeyService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([(request: FastifyRequest) => request.cookies.access]),
			secretOrKey: keyService.getPublic()
		});
	}

	public async validate(payload: AccessPayloadInterface) {
		const user = await this.userRepository.findUniqueById(payload.id);

		if(user) {
			return user;
		}
		else {
			throw this.exceptionService.notFoundException("User was not found");
		}
	}
}