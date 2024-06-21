import { ServerExceptionInterface } from "@common/interfaces/server-exception.interface";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";
import { BaseExceptionClass } from "@common/classes/base-exception.class";

export class ServerExceptionClass<R extends ServerExceptionInterface = ServerExceptionInterface> extends BaseExceptionClass<R> {
    constructor(response: R, status: ExceptionStatusEnum) {
        super(response, status);
    }
}