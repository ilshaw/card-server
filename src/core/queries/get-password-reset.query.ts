import { QueryHandler, EventBus } from "@nestjs/cqrs";

import { ConfirmationCreatedEvent } from "@common/events/confirmation-created.event";
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
        const confirm = await this.jwtService.signConfirm({ id: query.request.user.id });

        await this.eventBus.publish(new ConfirmationCreatedEvent(query.request.user, confirm));

        return this.responseService.okResponse("Confirmation has successfully sended");
    }
}