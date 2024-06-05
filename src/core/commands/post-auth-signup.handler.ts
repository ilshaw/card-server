import { CommandHandler } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { ResponseService } from "@core/services/response.service";

@CommandHandler(PostAuthSignupCommand)
export class PostAuthSignupHandler {
	constructor(private readonly responseService: ResponseService) {}

	public async execute(command: PostAuthSignupCommand) {
		return this.responseService.createdResponse("User has successfully signed up");
	}
}