import { QueryHandler } from "@nestjs/cqrs";

import { GetAuthLogoutQuery } from "@common/queries/get-auth-logout.query";
import { SessionRepository } from "@core/repositories/session.repository";
import { ResponseService } from "@core/services/response.service";
import { CookieService } from "@core/services/cookie.service";

@QueryHandler(GetAuthLogoutQuery)
export class GetAuthLogoutHandler {
    constructor(
        private readonly sessionRepository: SessionRepository,
        private readonly responseService: ResponseService,
        private readonly cookieService: CookieService
    ) {}

    public async execute(query: GetAuthLogoutQuery) {
        await this.sessionRepository.deleteByUserAndAccess(query.request.user, query.request.cookies.access);

        this.cookieService.clearRefresh(query.response);
        this.cookieService.clearAccess(query.response);

        return this.responseService.okResponse("User has successfully logged out");
    }
}