import { UseInterceptors, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

import { ClientResponseInterceptor } from "@core/interceptors/client-response.interceptor";
import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";

@UseInterceptors(ClientResponseInterceptor)
@Controller("/auth")
export class AuthController {
	constructor(private readonly commandBus: CommandBus) {}

	@Post("/signup")
	public async postAuthSignup() {
		return await this.commandBus.execute(new PostAuthSignupCommand());
	}
}