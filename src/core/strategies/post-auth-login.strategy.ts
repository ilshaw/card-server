import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

import { Strategy } from "passport-local";

import { ExceptionService } from "@core/services/exception.service";
import { UserRepository } from "@core/repositories/user.repository";
import { BcryptService } from "@core/services/bcrypt.service";

@Injectable()
export class PostAuthLoginStrategy extends PassportStrategy(Strategy, "post-auth-login") {
    constructor(
        private readonly exceptionService: ExceptionService, 
        private readonly userRepository: UserRepository,
        private readonly bcryptService: BcryptService
    ) {
        super({
            passwordField: "password",
            usernameField: "email"
        });
    }

    public async validate(email: string, password: string) {
        const user = await this.userRepository.findUniqueByEmail(email);

        if(user) {
            const result = await this.bcryptService.compareData(password, user.password);

            if(result) {
                return user;
            }
            else {
                throw this.exceptionService.forbiddenException("Invalid password was provided");
            }
        }
        else {
            throw this.exceptionService.notFoundException("User was not found");
        }
    }
}