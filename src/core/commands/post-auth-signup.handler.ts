import { CommandHandler, EventBus } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { SessionCreatedEvent } from "@common/events/session-created.event";
import { UserCreatedEvent } from "@common/events/user-created.event";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";
import { BcryptService } from "@core/services/bcrypt.service";
import { CookieService } from "@core/services/cookie.service";
import { JwtService } from "@core/services/jwt.service";

@CommandHandler(PostAuthSignupCommand)
export class PostAuthSignupHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository,
        private readonly bcryptService: BcryptService,
        private readonly cookieService: CookieService,
        private readonly jwtService: JwtService,
        private readonly eventBus: EventBus,
    ) {}

    public async execute(command: PostAuthSignupCommand) {
        const hash = await this.bcryptService.hashData(command.request.body.password);

        const user = await this.userRepository.createByLoginAndPassword(command.request.body.login, hash);

        const confirm = await this.jwtService.signConfirm({ id: user.id });

        const refresh = await this.jwtService.signRefresh({ id: user.id });
        const access = await this.jwtService.signAccess({ id: user.id });

        this.cookieService.setRefresh(refresh, command.response);
        this.cookieService.setAccess(access, command.response);

        await this.eventBus.publish(new SessionCreatedEvent(user, access, refresh));
        await this.eventBus.publish(new UserCreatedEvent(user, confirm));

        return this.responseService.createdResponse("User has successfully signed up", {
            user: lodash.omit(user, "password")
        });
    }
}