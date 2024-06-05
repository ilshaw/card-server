import { Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";

@Controller("/auth")
export class AuthController {
	constructor(private readonly commandBus: CommandBus) {}

	@Post("/signup")
	public async postAuthSignup() {
		return await this.commandBus.execute(new PostAuthSignupCommand());
	}
}