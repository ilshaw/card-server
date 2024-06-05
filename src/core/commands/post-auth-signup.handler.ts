import { CommandHandler } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";

@CommandHandler(PostAuthSignupCommand)
export class PostAuthSignupHandler {
	constructor(
		private readonly responseService: ResponseService,
		private readonly userRepository: UserRepository
	) {}

	public async execute(command: PostAuthSignupCommand) {
		const user = await this.userRepository.createByLoginAndPassword(command.request.body.login, command.request.body.password);

		return this.responseService.createdResponse("User has successfully signed up", {
			user: user
		});
	}
}