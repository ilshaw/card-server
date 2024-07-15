import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import * as rxjs from "rxjs";

import { InternalServerErrorException } from "@common/exceptions/internal-server-error.exception";
import { ClientExceptionClass } from "@common/classes/client-exception.class";

@Injectable()
export class ClientExceptionInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler) {
        const operator = rxjs.catchError((error) => {
            if(error instanceof ClientExceptionClass) {
                throw error;
            }
            else {
                throw new InternalServerErrorException("Unexpected error has occurred", error);
            }
        });

        const observable = next.handle();

        return observable.pipe(operator);
    }
}