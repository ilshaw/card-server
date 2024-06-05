import { BaseResponseInterface } from "@common/interfaces/base-response.interface";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";

export class BaseResponseClass {
	constructor(
		private readonly response: BaseResponseInterface, 
		private readonly status: ResponseStatusEnum
	) {}

	public getResponse() {
		return this.response;
	}

	public getStatus() {
		return this.status;
	}
}