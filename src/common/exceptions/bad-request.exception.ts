import { ClientExceptionClass } from "@common/classes/client-exception.class";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class BadRequestException extends ClientExceptionClass {
    constructor(message: ResponseMessageType) {
        super({ message: message, status: ExceptionStatusEnum.BAD_REQUEST }, ExceptionStatusEnum.BAD_REQUEST);
    }
}