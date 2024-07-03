import { Controller, UseGuards, HttpCode, Get, Request } from "@nestjs/common";
import { ApiTags, ApiSecurity, ApiOkResponse } from "@nestjs/swagger";
import { QueryBus } from "@nestjs/cqrs";

import { FastifyRequest } from "fastify";

import { GetUserIdProfileQuery } from "@common/queries/get-user-id-profile.query";
import { GetUserIdProfileParamsDto } from "@common/dtos/get-user-id-profile.dto";
import { GetUserProfileQuery } from "@common/queries/get-user-profile.query";
import { GetUserSessionQuery } from "@common/queries/get-user-session.query";
import { GetUserIdCardQuery } from "@common/queries/get-user-id-card.query";
import { GetUserIdCardParamsDto } from "@common/dtos/get-user-id-card.dto";
import { GetUserProfileGuard } from "@core/guards/get-user-profile.guard";
import { GetUserSessionGuard } from "@core/guards/get-user-session.guard";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { UserRequest } from "@common/interfaces/user-request.interface";
import { GetUserCardQuery } from "@common/queries/get-user-card.query";
import { GetUserListQuery } from "@common/queries/get-user-list.query";
import { GetUserCardGuard } from "@core/guards/get-user-card.guard";

@ApiTags("User")
@Controller("/user")
export class UserController {
    constructor(private readonly queryBus: QueryBus) {}

    @ApiOkResponse({ description: "" })
    @ApiSecurity("access")
    @UseGuards(GetUserSessionGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/session")
    public async getUserSession(@Request() request: UserRequest) {
        return await this.queryBus.execute(new GetUserSessionQuery(request));
    }

    @ApiOkResponse({ description: "" })
    @ApiSecurity("access")
    @UseGuards(GetUserProfileGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/profile")
    public async getUserProfile(@Request() request: UserRequest) {
        return await this.queryBus.execute(new GetUserProfileQuery(request));
    }

    @ApiOkResponse({ description: "" })
    @ApiSecurity("access")
    @UseGuards(GetUserCardGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/card")
    public async getUserCard(@Request() request: UserRequest) {
        return await this.queryBus.execute(new GetUserCardQuery(request));
    }

    @ApiOkResponse({ description: "" })
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/list")
    public async getUserList() {
        return await this.queryBus.execute(new GetUserListQuery());
    }

    @ApiOkResponse({ description: "" })
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/:id/profile")
    public async getUserIdProfile(@Request() request: FastifyRequest<{ Params: GetUserIdProfileParamsDto }>) {
        return await this.queryBus.execute(new GetUserIdProfileQuery(request));
    }

    @ApiOkResponse({ description: "" })
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/:id/card")
    public async getUserIdCard(@Request() request: FastifyRequest<{ Params: GetUserIdCardParamsDto }>) {
        return await this.queryBus.execute(new GetUserIdCardQuery(request))
    }
}