import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

import { Strategy, ExtractJwt } from "passport-jwt";
import { FastifyRequest } from "fastify";

import { RefreshPayloadInterface } from "@common/interfaces/refresh-payload.interface";
import { SessionRepository } from "@core/repositories/session.repository";
import { ExceptionService } from "@core/services/exception.service";
import { UserRepository } from "@core/repositories/user.repository";
import { KeyService } from "@core/services/key.service";

@Injectable()
export class GetTokenRefreshStrategy extends PassportStrategy(Strategy, "get-token-refresh") {
    constructor(
        private readonly sessionRepository: SessionRepository,
        private readonly exceptionService: ExceptionService, 
        private readonly userRepository: UserRepository,
        private readonly keyService: KeyService
    ) {
        super({
            passReqToCallback: true,
            jwtFromRequest: ExtractJwt.fromExtractors([(request: FastifyRequest) => request.cookies.refresh]),
            secretOrKey: keyService.readPublic()
        });
    }

    public async validate(request: FastifyRequest, payload: RefreshPayloadInterface) {
        const user = await this.userRepository.findUniqueById(payload.id);

        if(user) {
            const session = await this.sessionRepository.findUniqueByUserAndRefresh(user, request.cookies.refresh);

            if(session) {
                return user;
            }
            else {
                throw this.exceptionService.notFoundException("Session was not found");
            }
        }
        else {
            throw this.exceptionService.notFoundException("User was not found");
        }
    }
}