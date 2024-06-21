import { CommandHandler } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { PatchPasswordResetCommand } from "@common/commands/patch-password-reset.command";
import { SessionRepository } from "@core/repositories/session.repository";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";
import { BcryptService } from "@core/services/bcrypt.service";
import { CookieService } from "@core/services/cookie.service";
import { JwtService } from "@core/services/jwt.service";

@CommandHandler(PatchPasswordResetCommand)
export class PatchPasswordResetHandler {
    constructor(
        private readonly sessionRepository: SessionRepository,
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository,
        private readonly bcryptService: BcryptService,
        private readonly cookieService: CookieService,
        private readonly jwtService: JwtService
    ) {}

    public async execute(command: PatchPasswordResetCommand) {
        const hash = await this.bcryptService.hashData(command.request.body.password);

        const user = await this.userRepository.resetById(command.request.user.id, hash);

        const refresh = await this.jwtService.signRefresh({ id: user.id });
        const access = await this.jwtService.signAccess({ id: user.id });

        const session = await this.sessionRepository.createByUserAndAccessAndRefresh(user, access, refresh);

        this.cookieService.setRefresh(session.refresh, command.response);
        this.cookieService.setAccess(session.access, command.response);

        return this.responseService.okResponse("Password has successfully reseted", {
            user: lodash.omit(user, "password")
        });
    }
}