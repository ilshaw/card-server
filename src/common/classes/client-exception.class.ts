import { ClientExceptionInterface } from "@common/interfaces/client-exception.interface";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";
import { BaseExceptionClass } from "@common/classes/base-exception.class";

export class ClientExceptionClass<R extends ClientExceptionInterface = ClientExceptionInterface> extends BaseExceptionClass<R> {
    constructor(response: R, status: ExceptionStatusEnum) {
        super(response, status);
    }
}