import { CommandHandler } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { PostAuthLoginCommand } from "@common/commands/post-auth-login.command";
import { SessionRepository } from "@core/repositories/session.repository";
import { ResponseService } from "@core/services/response.service";
import { CookieService } from "@core/services/cookie.service";
import { JwtService } from "@core/services/jwt.service";

@CommandHandler(PostAuthLoginCommand)
export class PostAuthLoginHandler {
    constructor(
        private readonly sessionRepository: SessionRepository,
        private readonly responseService: ResponseService,
        private readonly cookieService: CookieService,
        private readonly jwtService: JwtService
    ) {}

    public async execute(command: PostAuthLoginCommand) {
        const refresh = await this.jwtService.signRefresh({ id: command.request.user.id });
        const access = await this.jwtService.signAccess({ id: command.request.user.id });

        const session = await this.sessionRepository.createByUserAndAccessAndRefresh(command.request.user, access, refresh);

        this.cookieService.setRefresh(session.refresh, command.response);
        this.cookieService.setAccess(session.access, command.response);

        return this.responseService.createdResponse("User has successfully logged in", {
            user: lodash.omit(command.request.user, "password")
        });
    }
}