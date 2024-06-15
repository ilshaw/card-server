import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import * as lodash from "lodash";

import { ExceptionService } from "@core/services/exception.service";
import { UserEntity } from "@common/entities/user.entity";

@Injectable()
export class PostAuthSignupGuard extends AuthGuard("post-auth-signup") implements CanActivate {
    constructor(private readonly exceptionService: ExceptionService) {
        super();
    }

    public handleRequest<U extends UserEntity = UserEntity>(error: unknown, user: U) {
        if(error) {
            throw error;
        }
        else {
            if(user) {
                throw this.exceptionService.conflictException("Email is already taken");
            }
            else {
                return lodash.omit(user, "password");
            }
        }
    }

    public canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }
}