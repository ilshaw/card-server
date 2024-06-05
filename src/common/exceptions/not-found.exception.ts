import { ClientExceptionClass } from "@common/classes/client-exception.class";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class NotFoundException extends ClientExceptionClass {
	constructor(message: ResponseMessageType) {
		super({ message: message, status: ExceptionStatusEnum.NOT_FOUND }, ExceptionStatusEnum.NOT_FOUND);
	}
}