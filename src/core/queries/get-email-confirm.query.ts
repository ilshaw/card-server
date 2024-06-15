import { QueryHandler, EventBus } from "@nestjs/cqrs";

import { ConfirmationCreatedEvent } from "@common/events/confirmation-created.event";
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
        const confirm = await this.jwtService.signConfirm({ id: query.request.user.id });

        await this.eventBus.publish(new ConfirmationCreatedEvent(query.request.user, confirm));

        return this.responseService.okResponse("Confirmation has successfully sended");
    }
}