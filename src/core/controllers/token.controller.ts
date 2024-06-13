import { Controller, UseGuards, HttpCode, Get, Request } from "@nestjs/common";
import { ApiTags, ApiSecurity, ApiOkResponse } from "@nestjs/swagger";
import { QueryBus } from "@nestjs/cqrs";

import { FastifyReply } from "fastify";

import { GetTokenRefreshQuery } from "@common/queries/get-token-refresh.query";
import { GetTokenRefreshGuard } from "@core/guards/get-token-refresh.guard";
import { ResponseDecorator } from "@common/decorators/response.decorator";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { UserRequest } from "@common/interfaces/user-request.interface";

@ApiTags("Token")
@Controller("/token")
export class TokenController {
    constructor(private readonly queryBus: QueryBus) {}

    @ApiOkResponse({ description: "Tokens has successfully refreshed" })
    @ApiSecurity("refresh")
    @UseGuards(GetTokenRefreshGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/refresh")
    public async getTokenRefresh(@Request() request: UserRequest, @ResponseDecorator() response: FastifyReply) {
        return await this.queryBus.execute(new GetTokenRefreshQuery(request, response));
    }
}