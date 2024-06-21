import { QueryHandler, EventBus } from "@nestjs/cqrs";

import { GetPasswordResetQuery } from "@common/queries/get-password-reset.query";
import { ResponseService } from "@core/services/response.service";
import { JwtService } from "@core/services/jwt.service";

@QueryHandler(GetPasswordResetQuery)
export class GetPasswordResetHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly jwtService: JwtService,
        private readonly eventBus: EventBus
    ) {}

    public async execute(query: GetPasswordResetQuery) {
        return this.responseService.okResponse("Confirmation has successfully sended");
    }
}