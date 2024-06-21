import { QueryHandler, EventBus } from "@nestjs/cqrs";

import { GetEmailConfirmQuery } from "@common/queries/get-email-confirm.query";
import { ResponseService } from "@core/services/response.service";
import { JwtService } from "@core/services/jwt.service";

@QueryHandler(GetEmailConfirmQuery)
export class GetEmailConfirmHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly jwtService: JwtService,
        private readonly eventBus: EventBus
    ) {}

    public async execute(query: GetEmailConfirmQuery) {
        return this.responseService.okResponse("Confirmation has successfully sended");
    }
}