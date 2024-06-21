import { QueryHandler } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { GetTokenRefreshQuery } from "@common/queries/get-token-refresh.query";
import { SessionRepository } from "@core/repositories/session.repository";
import { ResponseService } from "@core/services/response.service";
import { CookieService } from "@core/services/cookie.service";
import { JwtService } from "@core/services/jwt.service";

@QueryHandler(GetTokenRefreshQuery)
export class GetTokenRefreshHandler {
    constructor(
        private readonly sessionRepository: SessionRepository,
        private readonly responseService: ResponseService,
        private readonly cookieService: CookieService,
        private readonly jwtService: JwtService
    ) {}

    public async execute(query: GetTokenRefreshQuery) {
        const refresh = await this.jwtService.signRefresh({ id: query.request.user.id });
        const access = await this.jwtService.signAccess({ id: query.request.user.id });

        const session = await this.sessionRepository.createByUserAndAccessAndRefresh(query.request.user, access, refresh);

        this.cookieService.setRefresh(session.refresh, query.response);
        this.cookieService.setAccess(session.access, query.response);

        return this.responseService.okResponse("Tokens has successfully refreshed", {
            user: lodash.omit(query.request.user, "password")
        });
    }
}