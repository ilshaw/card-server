import { ClientExceptionClass } from "@common/classes/client-exception.class";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class ConflictException extends ClientExceptionClass {
	constructor(message: ResponseMessageType) {
		super({ message: message, status: ExceptionStatusEnum.CONFLICT }, ExceptionStatusEnum.CONFLICT);
	}
}