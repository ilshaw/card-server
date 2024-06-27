import { Controller, UseGuards, HttpCode, Get, Request } from "@nestjs/common";
import { ApiTags, ApiSecurity, ApiOkResponse } from "@nestjs/swagger";
import { QueryBus } from "@nestjs/cqrs";

import { GetUserProfileQuery } from "@common/queries/get-user-profile.query";
import { GetUserProfileGuard } from "@core/guards/get-user-profile.guard";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { UserRequest } from "@common/interfaces/user-request.interface";
import { GetUserCardQuery } from "@common/queries/get-user-card.query";
import { GetUserCardGuard } from "@core/guards/get-user-card.guard";

@ApiTags("User")
@Controller("/user")
export class UserController {
    constructor(private readonly queryBus: QueryBus) {}

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
}