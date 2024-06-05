import { CommandHandler } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";
import { BcryptService } from "@core/services/bcrypt.service";

@CommandHandler(PostAuthSignupCommand)
export class PostAuthSignupHandler {
	constructor(
		private readonly responseService: ResponseService,
		private readonly userRepository: UserRepository,
		private readonly bcryptService: BcryptService
	) {}

	public async execute(command: PostAuthSignupCommand) {
		const hash = await this.bcryptService.hashData(command.request.body.password);

		const user = await this.userRepository.createByLoginAndPassword(command.request.body.login, hash);

		return this.responseService.createdResponse("User has successfully signed up", {
			user: user
		});
	}
}