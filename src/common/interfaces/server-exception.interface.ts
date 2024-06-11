import { BaseExceptionInterface } from "@common/interfaces/base-exception.interface";

export interface ServerExceptionInterface extends BaseExceptionInterface {
    readonly cause?: ExceptionCauseType
}