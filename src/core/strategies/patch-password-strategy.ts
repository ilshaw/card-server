import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

import { Strategy, ExtractJwt } from "passport-jwt";
import { FastifyRequest } from "fastify";

import { ConfirmPayloadInterface } from "@common/interfaces/confirm-payload.interface";
import { ConfirmationRepository } from "@core/repositories/confirmation.repository";
import { ExceptionService } from "@core/services/exception.service";
import { UserRepository } from "@core/repositories/user.repository";
import { KeyService } from "@core/services/key.service";

@Injectable()
export class PatchPasswordResetStrategy extends PassportStrategy(Strategy, "patch-password-reset") {
    constructor(
        private readonly confirmationRepository: ConfirmationRepository,
        private readonly exceptionService: ExceptionService, 
        private readonly userRepository: UserRepository,
        private readonly keyService: KeyService
    ) {
        super({
            passReqToCallback: true,
            jwtFromRequest: ExtractJwt.fromExtractors([(request: FastifyRequest) => request.headers.authorization]),
            secretOrKey: keyService.readPublic()
        });
    }

    public async validate(request: FastifyRequest, payload: ConfirmPayloadInterface) {
        const user = await this.userRepository.findUniqueById(payload.id);

        if(user) {
            const confirmation = await this.confirmationRepository.findUniqueByUserAndConfirm(user, request.headers.authorization);

            if(confirmation) {
                return user;
            }
            else {
                throw this.exceptionService.notFoundException("Confirmation was not found");
            }
        }
        else {
            throw this.exceptionService.notFoundException("User was not found");
        }
    }
}