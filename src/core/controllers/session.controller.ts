import { Controller, UseGuards, HttpCode, Get, Request } from "@nestjs/common";
import { ApiTags, ApiSecurity, ApiOkResponse } from "@nestjs/swagger";
import { QueryBus } from "@nestjs/cqrs";

import { FastifyReply } from "fastify";

import { GetSessionRefreshQuery } from "@common/queries/get-session-refresh.query";
import { GetSessionRefreshGuard } from "@core/guards/get-session-refresh.guard";
import { ResponseDecorator } from "@common/decorators/response.decorator";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { UserRequest } from "@common/interfaces/user-request.interface";

@ApiTags("Session")
@Controller("/session")
export class SessionController {
    constructor(private readonly queryBus: QueryBus) {}

    @ApiOkResponse({ description: "Session has successfully refreshed" })
    @ApiSecurity("refresh")
    @UseGuards(GetSessionRefreshGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/refresh")
    public async getTokenRefresh(@Request() request: UserRequest, @ResponseDecorator() response: FastifyReply) {
        return await this.queryBus.execute(new GetSessionRefreshQuery(request, response));
    }
}