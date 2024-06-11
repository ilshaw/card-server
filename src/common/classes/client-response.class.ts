import { ClientResponseInterface } from "@common/interfaces/client-response.interface";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { BaseResponseClass } from "@common/classes/base-response.class";

export class ClientResponseClass extends BaseResponseClass {
    constructor(response: ClientResponseInterface, status: ResponseStatusEnum) {
        super(response, status);
    }
}