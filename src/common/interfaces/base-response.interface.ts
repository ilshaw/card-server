import { ResponseStatusEnum } from "@common/enums/response-status.enum";

export interface BaseResponseInterface {
	readonly message: ResponseMessageType
	readonly status: ResponseStatusEnum
}