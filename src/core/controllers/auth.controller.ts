import { ApiTags, ApiBody, ApiCreatedResponse, ApiConflictResponse } from "@nestjs/swagger";
import { Controller, UseGuards, HttpCode, Post, Request } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

import { FastifyRequest, FastifyReply } from "fastify";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { PostAuthSignupBodyDto } from "@common/dtos/post-auth-signup.dto";
import { PostAuthSignupGuard } from "@core/guards/post-auth-signup.guard";
import { ResponseDecorator } from "@common/decorators/response.decorator";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";

@ApiTags("Auth")
@Controller("/auth")
export class AuthController {
    constructor(private readonly commandBus: CommandBus) {}

    @ApiConflictResponse({ description: "Login is already taken" })
    @ApiCreatedResponse({ description: "User has successfully signed up" })
    @ApiBody({ type: PostAuthSignupBodyDto, required: true, description: "Post auth signup body" })
    @UseGuards(PostAuthSignupGuard)
    @HttpCode(ResponseStatusEnum.CREATED)
    @Post("/signup")
    public async postAuthSignup(@Request() request: FastifyRequest<{ Body: PostAuthSignupBodyDto }>, @ResponseDecorator() response: FastifyReply) {
        return await this.commandBus.execute(new PostAuthSignupCommand(request, response));
    }
}