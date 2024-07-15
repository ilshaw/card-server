import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

import { Strategy } from "passport-local";

import { ExceptionService } from "@core/services/exception.service";
import { UserRepository } from "@core/repositories/user.repository";

@Injectable()
export class PostAuthSignupStrategy extends PassportStrategy(Strategy, "post-auth-signup") {
    constructor(
        private readonly exceptionService: ExceptionService, 
        private readonly userRepository: UserRepository
    ) {
        super({
            passwordField: "password",
            usernameField: "email"
        });
    }

    public async validate(email: string) {
        const user = await this.userRepository.findUniqueByEmail(email);

        if(user) {
            throw this.exceptionService.conflictException("Email is already taken");
        }
        else {
            return user;
        }
    }
}