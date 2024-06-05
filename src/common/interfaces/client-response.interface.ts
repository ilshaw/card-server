import { BaseResponseInterface } from "@common/interfaces/base-response.interface";

export interface ClientResponseInterface extends BaseResponseInterface {
	readonly data?: ResponseDataType
}