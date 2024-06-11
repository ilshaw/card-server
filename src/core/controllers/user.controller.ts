import { Controller, UseGuards, HttpCode, Get, Request } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { QueryBus } from "@nestjs/cqrs";

import { GetUserProfileQuery } from "@common/queries/get-user-profile.query";
import { GetUserProfileGuard } from "@core/guards/get-user-profile.guard";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { UserRequest } from "@common/interfaces/user-request.interface";

@ApiTags("User")
@Controller("/user")
export class UserController {
    constructor(private readonly queryBus: QueryBus) {}

    @UseGuards(GetUserProfileGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/profile")
    public async getUserProfile(@Request() request: UserRequest) {
        return await this.queryBus.execute(new GetUserProfileQuery(request));
    }
}