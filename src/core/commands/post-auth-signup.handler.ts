import { CommandHandler, EventBus } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";
import { BcryptService } from "@core/services/bcrypt.service";
import { JwtService } from "@core/services/jwt.service";

import { SessionCreatedEvent } from "@common/events/session-created.event";
import { UserCreatedEvent } from "@common/events/user-created.event";

@CommandHandler(PostAuthSignupCommand)
export class PostAuthSignupHandler {
	constructor(
		private readonly responseService: ResponseService,
		private readonly userRepository: UserRepository,
		private readonly bcryptService: BcryptService,
		private readonly jwtService: JwtService,
		private readonly eventBus: EventBus
	) {}

	public async execute(command: PostAuthSignupCommand) {
		const hash = await this.bcryptService.hashData(command.request.body.password);

		const user = await this.userRepository.createByLoginAndPassword(command.request.body.login, hash);

		await this.eventBus.publish(new UserCreatedEvent(user));

		const refresh = await this.jwtService.signRefresh({ id: user.id });
		const access = await this.jwtService.signAccess({ id: user.id });

		await this.eventBus.publish(new SessionCreatedEvent(access, refresh));

		return this.responseService.createdResponse("User has successfully signed up", {
			token: {
				refresh: refresh,
				access: access
			},
			user: user
		});
	}
}