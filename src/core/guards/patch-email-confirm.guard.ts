import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import * as lodash from "lodash";

import { ExceptionService } from "@core/services/exception.service";
import { UserEntity } from "@common/entities/user.entity";

@Injectable()
export class PatchEmailConfirmGuard extends AuthGuard("patch-email-confirm") implements CanActivate {
    constructor(private readonly exceptionService: ExceptionService) {
        super();
    }

    public handleRequest<U extends UserEntity = UserEntity>(error: unknown, user: U, info: unknown) {
        if(error) {
            throw error;
        }
        else {
            if(info) {
                throw this.exceptionService.unauthorizedException("Invalid confirm token was provided");
            }
            else {
                if(user) {
                    return lodash.omit(user, "password");
                }
                else {
                    throw this.exceptionService.notFoundException("User was not found");
                }
            }
        }
    }

    public canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }
}