import { BaseExceptionInterface } from "@common/interfaces/base-exception.interface";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class BaseExceptionClass<R extends BaseExceptionInterface = BaseExceptionInterface> {
    constructor(
        private readonly response: R, 
        private readonly status: ExceptionStatusEnum
    ) {}

    public getResponse() {
        return this.response;
    }

    public getStatus() {
        return this.status;
    }
}