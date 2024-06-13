import { ApiTags, ApiBody, ApiOkResponse, ApiCreatedResponse } from "@nestjs/swagger";
import { Controller, UseGuards, HttpCode, Post, Request } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

import { FastifyRequest, FastifyReply } from "fastify";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { PostAuthLoginCommand } from "@common/commands/post-auth-login.command";
import { PostAuthSignupBodyDto } from "@common/dtos/post-auth-signup.dto";
import { PostAuthSignupGuard } from "@core/guards/post-auth-signup.guard";
import { ResponseDecorator } from "@common/decorators/response.decorator";
import { PostAuthLoginBodyDto } from "@common/dtos/post-auth-login.dto";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { PostAuthLoginGuard } from "@core/guards/post-auth-login.guard";
import { UserRequest } from "@common/interfaces/user-request.interface";

@ApiTags("Auth")
@Controller("/auth")
export class AuthController {
    constructor(private readonly commandBus: CommandBus) {}

    @ApiCreatedResponse({ description: "User has successfully signed up" })
    @ApiBody({ type: PostAuthSignupBodyDto, required: true, description: "Post auth signup body" })
    @UseGuards(PostAuthSignupGuard)
    @HttpCode(ResponseStatusEnum.CREATED)
    @Post("/signup")
    public async postAuthSignup(@Request() request: FastifyRequest<{ Body: PostAuthSignupBodyDto }>, @ResponseDecorator() response: FastifyReply) {
        return await this.commandBus.execute(new PostAuthSignupCommand(request, response));
    }

    @ApiOkResponse({ description: "User has successfully logged in" })
    @ApiBody({ type: PostAuthLoginBodyDto, required: true, description: "Post auth login body" })
    @UseGuards(PostAuthLoginGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Post("/login")
    public async postAuthLogin(@Request() request: UserRequest<{ Body: PostAuthLoginBodyDto }>, @ResponseDecorator() response: FastifyReply) {
        return await this.commandBus.execute(new PostAuthLoginCommand(request, response));
    }
}