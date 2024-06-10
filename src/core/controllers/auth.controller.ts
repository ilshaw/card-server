import { UseInterceptors, UseFilters, Controller, UseGuards, Post, Request } from "@nestjs/common";
import { ApiTags, ApiBody } from "@nestjs/swagger";
import { CommandBus } from "@nestjs/cqrs";

import { FastifyRequest } from "fastify";

import { ClientResponseInterceptor } from "@core/interceptors/client-response.interceptor";
import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { ClientExceptionFilter } from "@core/filters/client-exception.filter";
import { PostAuthSignupGuard } from "@core/guards/post-auth-signup.guard";
import { PostAuthSignupDto } from "@common/dtos/post-auth-signup.dto";

@ApiTags("Auth")
@UseInterceptors(ClientResponseInterceptor)
@UseFilters(ClientExceptionFilter)
@Controller("/auth")
export class AuthController {
	constructor(private readonly commandBus: CommandBus) {}

	@ApiBody({ type: PostAuthSignupDto, required: true })
	@UseGuards(PostAuthSignupGuard)
	@Post("/signup")
	public async postAuthSignup(@Request() request: FastifyRequest<{ Body: PostAuthSignupDto }>) {
		return await this.commandBus.execute(new PostAuthSignupCommand(request));
	}
}