import { BaseResponseInterface } from "@common/interfaces/base-response.interface";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";

export class BaseResponseClass<R extends BaseResponseInterface = BaseResponseInterface> {
    constructor(
        private readonly response: R, 
        private readonly status: ResponseStatusEnum
    ) {}

    public getResponse() {
        return this.response;
    }

    public getStatus() {
        return this.status;
    }
}