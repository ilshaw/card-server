import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

import { Strategy, ExtractJwt } from "passport-jwt";
import { FastifyRequest } from "fastify";

import { AccessPayloadInterface } from "@common/interfaces/access-payload.interface";
import { SessionRepository } from "@core/repositories/session.repository";
import { ExceptionService } from "@core/services/exception.service";
import { UserRepository } from "@core/repositories/user.repository";
import { KeyService } from "@core/services/key.service";

@Injectable()
export class GetPasswordResetStrategy extends PassportStrategy(Strategy, "get-password-reset") {
    constructor(
        private readonly sessionRepository: SessionRepository,
        private readonly exceptionService: ExceptionService, 
        private readonly userRepository: UserRepository,
        private readonly keyService: KeyService
    ) {
        super({
            passReqToCallback: true,
            jwtFromRequest: ExtractJwt.fromExtractors([(request: FastifyRequest) => request.cookies.access]),
            secretOrKey: keyService.readPublic()
        });
    }

    public async validate(request: FastifyRequest, payload: AccessPayloadInterface) {
        const user = await this.userRepository.findUniqueById(payload.id);

        if(user) {
            const session = await this.sessionRepository.findUniqueByUserAndAccess(user, request.cookies.access);

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