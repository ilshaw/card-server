import { ServerExceptionInterface } from "@common/interfaces/server-exception.interface";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";
import { BaseExceptionClass } from "@common/classes/base-exception.class";

export class ServerExceptionClass extends BaseExceptionClass {
    constructor(response: ServerExceptionInterface, status: ExceptionStatusEnum) {
        super(response, status);
    }
}