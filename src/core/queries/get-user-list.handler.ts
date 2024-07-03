import { QueryHandler } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { GetUserListQuery } from "@common/queries/get-user-list.query";
import { UserRepository } from "@core/repositories/user.repository";
import { ResponseService } from "@core/services/response.service";

@QueryHandler(GetUserListQuery)
export class GetUserListHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository
    ) {}

    public async execute() {
        const users = await this.userRepository.findMany();

        return this.responseService.okResponse("", {
            users: users.map((user) => lodash.omit(user, "password"))
        });
    }
}