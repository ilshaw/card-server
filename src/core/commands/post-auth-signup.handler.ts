import { CommandHandler } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";
import { BcryptService } from "@core/services/bcrypt.service";
import { JwtService } from "@core/services/jwt.service";

@CommandHandler(PostAuthSignupCommand)
export class PostAuthSignupHandler {
	constructor(
		private readonly responseService: ResponseService,
		private readonly userRepository: UserRepository,
		private readonly bcryptService: BcryptService,
		private readonly jwtService: JwtService
	) {}

	public async execute(command: PostAuthSignupCommand) {
		const hash = await this.bcryptService.hashData(command.request.body.password);

		const user = await this.userRepository.createByLoginAndPassword(command.request.body.login, hash);

		const refresh = await this.jwtService.signRefresh({ id: user.id });
		const access = await this.jwtService.signAccess({ id: user.id });

		return this.responseService.createdResponse("User has successfully signed up", {
			token: {
				refresh: refresh,
				access: access
			},
			user: user
		});
	}
}