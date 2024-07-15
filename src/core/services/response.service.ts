import { Injectable } from "@nestjs/common";

import { CreatedResponse } from "@common/responses/created.response";
import { OkResponse } from "@common/responses/ok.response";

@Injectable()
export class ResponseService {
    public createdResponse(message: ResponseMessageType, data?: ResponseDataType) {
        return new CreatedResponse(message, data);
    }

    public okResponse(message: ResponseMessageType, data?: ResponseDataType) {
        return new OkResponse(message, data);
    }
}