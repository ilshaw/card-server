import { QueryHandler } from "@nestjs/cqrs";

import { GetUserSessionQuery } from "@common/queries/get-user-session.query";
import { SessionRepository } from "@core/repositories/session.repository";
import { ResponseService } from "@core/services/response.service";

@QueryHandler(GetUserSessionQuery)
export class GetUserSessionHandler {
    constructor(
        private readonly sessionRepository: SessionRepository,
        private readonly responseService: ResponseService
    ) {}

    public async execute(query: GetUserSessionQuery) {
        const session = await this.sessionRepository.findUniqueByUser(query.request.user);

        return this.responseService.okResponse("", {
            session: session
        });
    }
}