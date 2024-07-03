import { QueryHandler } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { GetUserIdProfileQuery } from "@common/queries/get-user-id-profile.query";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";

@QueryHandler(GetUserIdProfileQuery)
export class GetUserIdProfileHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository
    ) {}

    public async execute(query: GetUserIdProfileQuery) {
        const user = await this.userRepository.findUniqueById(query.request.params.id);

        return this.responseService.okResponse("", {
            user: lodash.omit(user, "password")
        });
    }
}