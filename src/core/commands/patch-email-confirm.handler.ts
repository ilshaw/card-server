import { CommandHandler } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { PatchEmailConfirmCommand } from "@common/commands/patch-email-confirm.command";
import { SessionRepository } from "@core/repositories/session.repository";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";
import { CookieService } from "@core/services/cookie.service";
import { JwtService } from "@core/services/jwt.service";

@CommandHandler(PatchEmailConfirmCommand)
export class PatchEmailConfirmHandler {
    constructor(
        private readonly sessionRepository: SessionRepository,
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository,
        private readonly cookieService: CookieService,
        private readonly jwtService: JwtService
    ) {}

    public async execute(command: PatchEmailConfirmCommand) {
        const user = await this.userRepository.confirmById(command.request.user.id);

        const refresh = await this.jwtService.signRefresh({ id: user.id });
        const access = await this.jwtService.signAccess({ id: user.id });

        const session = await this.sessionRepository.createByUserAndAccessAndRefresh(user, access, refresh);

        this.cookieService.setRefresh(session.refresh, command.response);
        this.cookieService.setAccess(session.access, command.response);

        return this.responseService.okResponse("Email has successfully confirmed", {
            user: lodash.omit(user, "password")
        });
    }
}