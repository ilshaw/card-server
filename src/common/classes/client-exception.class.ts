import { ClientExceptionInterface } from "@common/interfaces/client-exception.interface";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";
import { BaseExceptionClass } from "@common/classes/base-exception.class";

export class ClientExceptionClass extends BaseExceptionClass {
	constructor(response: ClientExceptionInterface, status: ExceptionStatusEnum) {
		super(response, status);
	}
}