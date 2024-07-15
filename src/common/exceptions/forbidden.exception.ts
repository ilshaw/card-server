import { ClientExceptionClass } from "@common/classes/client-exception.class";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class ForbiddenException extends ClientExceptionClass {
    constructor(message: ExceptionMessageType) {
        super({ message: message, status: ExceptionStatusEnum.FORBIDDEN }, ExceptionStatusEnum.FORBIDDEN);
    }
}