import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export interface BaseExceptionInterface {
    readonly message: ExceptionMessageType
    readonly status: ExceptionStatusEnum
}