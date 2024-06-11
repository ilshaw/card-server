import { CommandHandler, EventBus } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { PostAuthLoginCommand } from "@common/commands/post-auth-login.command";
import { SessionCreatedEvent } from "@common/events/session-created.event";
import { ResponseService } from "@core/services/response.service";
import { CookieService } from "@core/services/cookie.service";
import { JwtService } from "@core/services/jwt.service";

@CommandHandler(PostAuthLoginCommand)
export class PostAuthLoginHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly cookieService: CookieService,
        private readonly jwtService: JwtService,
        private readonly eventBus: EventBus,
    ) {}

    public async execute(command: PostAuthLoginCommand) {
        const refresh = await this.jwtService.signRefresh({ id: command.request.user.id });
        const access = await this.jwtService.signAccess({ id: command.request.user.id });

        this.cookieService.setRefresh(refresh, command.response);
        this.cookieService.setAccess(access, command.response);

        await this.eventBus.publish(new SessionCreatedEvent(command.request.user, access, refresh));

        return this.responseService.createdResponse("User has successfully logged in", {
            user: lodash.omit(command.request.user, "password")
        });
    }
}