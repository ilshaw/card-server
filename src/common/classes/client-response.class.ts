import { ClientResponseInterface } from "@common/interfaces/client-response.interface";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { BaseResponseClass } from "@common/classes/base-response.class";

export class ClientResponseClass<R extends ClientResponseInterface = ClientResponseInterface> extends BaseResponseClass<R> {
    constructor(response: R, status: ResponseStatusEnum) {
        super(response, status);
    }
}