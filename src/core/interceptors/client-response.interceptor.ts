import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import * as rxjs from "rxjs";

import { ClientResponseClass } from "@common/classes/client-response.class";

@Injectable()
export class ClientResponseInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(rxjs.map((data) => data instanceof ClientResponseClass ? data.getResponse() : data));
    }
}