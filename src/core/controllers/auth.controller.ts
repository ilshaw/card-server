import { UseInterceptors, UseFilters, Controller, UseGuards, HttpCode, Post, Request } from "@nestjs/common";
import { ApiTags, ApiBody, ApiCreatedResponse, ApiConflictResponse } from "@nestjs/swagger";
import { CommandBus } from "@nestjs/cqrs";

import { FastifyRequest } from "fastify";

import { ClientResponseInterceptor } from "@core/interceptors/client-response.interceptor";
import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { ClientExceptionFilter } from "@core/filters/client-exception.filter";
import { PostAuthSignupGuard } from "@core/guards/post-auth-signup.guard";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { PostAuthSignupDto } from "@common/dtos/post-auth-signup.dto";

@ApiTags("Auth")
@UseInterceptors(ClientResponseInterceptor)
@UseFilters(ClientExceptionFilter)
@Controller("/auth")
export class AuthController {
	constructor(private readonly commandBus: CommandBus) {}

	@ApiConflictResponse({ description: "Login is already taken" })
	@ApiCreatedResponse({ description: "User has successfully signed up" })
	@ApiBody({ type: PostAuthSignupDto, required: true, description: "Post auth signup body" })
	@UseGuards(PostAuthSignupGuard)
	@HttpCode(ResponseStatusEnum.CREATED)
	@Post("/signup")
	public async postAuthSignup(@Request() request: FastifyRequest<{ Body: PostAuthSignupDto }>) {
		return await this.commandBus.execute(new PostAuthSignupCommand(request));
	}
}