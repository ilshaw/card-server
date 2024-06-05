import { UseInterceptors, Controller, Post, Request } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

import { FastifyRequest } from "fastify";

import { ClientResponseInterceptor } from "@core/interceptors/client-response.interceptor";
import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { PostAuthSignupDto } from "@common/dtos/post-auth-signup.dto";

@UseInterceptors(ClientResponseInterceptor)
@Controller("/auth")
export class AuthController {
	constructor(private readonly commandBus: CommandBus) {}

	@Post("/signup")
	public async postAuthSignup(@Request() request: FastifyRequest<{ Body: PostAuthSignupDto }>) {
		return await this.commandBus.execute(new PostAuthSignupCommand(request));
	}
}