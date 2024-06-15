import { CommandHandler, EventBus } from "@nestjs/cqrs";

import { PatchPasswordResetCommand } from "@common/commands/patch-password-reset.command";
import { PasswordResetedEvent } from "@common/events/password-reseted.event";
import { SessionCreatedEvent } from "@common/events/session-created.event";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";
import { BcryptService } from "@core/services/bcrypt.service";
import { CookieService } from "@core/services/cookie.service";
import { JwtService } from "@core/services/jwt.service";

@CommandHandler(PatchPasswordResetCommand)
export class PatchPasswordResetHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository,
        private readonly bcryptService: BcryptService,
        private readonly cookieService: CookieService,
        private readonly jwtService: JwtService,
        private readonly eventBus: EventBus
    ) {}

    public async execute(command: PatchPasswordResetCommand) {
        const hash = await this.bcryptService.hashData(command.request.body.password);

        const user = await this.userRepository.resetById(command.request.user.id, hash);

        const refresh = await this.jwtService.signRefresh({ id: command.request.user.id });
        const access = await this.jwtService.signAccess({ id: command.request.user.id });

        this.cookieService.setRefresh(refresh, command.response);
        this.cookieService.setAccess(access, command.response);

        await this.eventBus.publish(new PasswordResetedEvent(user, command.request.headers.authorization));
        await this.eventBus.publish(new SessionCreatedEvent(user, access, refresh));

        return this.responseService.okResponse("Password has successfully reseted", {
            user: user
        });
    }
}