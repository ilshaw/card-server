import { QueryHandler } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { GetUserProfileQuery } from "@common/queries/get-user-profile.query";
import { ResponseService } from "@core/services/response.service";

@QueryHandler(GetUserProfileQuery)
export class GetUserProfileHandler {
    constructor(private readonly responseService: ResponseService) {}

    public async execute(query: GetUserProfileQuery) {
        return this.responseService.okResponse("Information about user profile", {
            user: lodash.omit(query.request.user, "password")
        });
    }
}