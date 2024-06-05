import { CommandHandler } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";

@CommandHandler(PostAuthSignupCommand)
export class PostAuthSignupHandler {
	constructor() {}

	public async execute(command: PostAuthSignupCommand) {
		
	}
}