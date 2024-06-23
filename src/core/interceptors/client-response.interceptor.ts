import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import * as rxjs from "rxjs";

import { ClientResponseClass } from "@common/classes/client-response.class";

@Injectable()
export class ClientResponseInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler) {
        const operator = rxjs.map((data) => {
            if(data instanceof ClientResponseClass) {
                return data.getResponse();
            }
            else {
                return data;
            }
        });

        const observable = next.handle();

        return observable.pipe(operator);
    }
}