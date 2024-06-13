import { CommandHandler, EventBus } from "@nestjs/cqrs";

import { PatchEmailConfirmCommand } from "@common/commands/patch-email-confirm.command";
import { EmailConfirmedEvent } from "@common/events/email-confirmed.event";
import { SessionCreatedEvent } from "@common/events/session-created.event";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";
import { CookieService } from "@core/services/cookie.service";
import { JwtService } from "@core/services/jwt.service";

@CommandHandler(PatchEmailConfirmCommand)
export class PatchEmailConfirmHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository,
        private readonly cookieService: CookieService,
        private readonly jwtService: JwtService,
        private readonly eventBus: EventBus
    ) {}

    public async execute(command: PatchEmailConfirmCommand) {
        const user = await this.userRepository.confirmById(command.request.user.id);

        const refresh = await this.jwtService.signRefresh({ id: command.request.user.id });
        const access = await this.jwtService.signAccess({ id: command.request.user.id });

        this.cookieService.setRefresh(refresh, command.response);
        this.cookieService.setAccess(access, command.response);

        await this.eventBus.publish(new EmailConfirmedEvent(user, command.request.headers.authorization));
        await this.eventBus.publish(new SessionCreatedEvent(user, access, refresh));

        return this.responseService.okResponse("Email has successfully confirmed", {
            user: user
        });
    }
}