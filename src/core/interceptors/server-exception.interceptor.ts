import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import * as rxjs from "rxjs";

import { InternalServerErrorException } from "@common/exceptions/internal-server-error.exception";
import { ServerExceptionClass } from "@common/classes/server-exception.class";

@Injectable()
export class ServerExceptionInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler) {
        const operator = rxjs.catchError((error) => {
            if(error instanceof ServerExceptionClass) {
                throw error;
            }
            else {
                throw new InternalServerErrorException("Unexpected error has occurred", error);
            }
        });

        return next.handle().pipe(operator);
    }
}