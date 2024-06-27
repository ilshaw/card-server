import { QueryHandler, EventBus } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { GetSessionRefreshQuery } from "@common/queries/get-session-refresh.query";
import { SessionCreatedEvent } from "@common/events/session-created.event";
import { ResponseService } from "@core/services/response.service";
import { CookieService } from "@core/services/cookie.service";
import { JwtService } from "@core/services/jwt.service";

@QueryHandler(GetSessionRefreshQuery)
export class GetSessionRefreshHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly cookieService: CookieService,
        private readonly jwtService: JwtService,
        private readonly eventBus: EventBus
    ) {}

    public async execute(query: GetSessionRefreshQuery) {
        const refresh = await this.jwtService.signRefresh({ id: query.request.user.id });
        const access = await this.jwtService.signAccess({ id: query.request.user.id });

        this.cookieService.setRefresh(refresh, query.response);
        this.cookieService.setAccess(access, query.response);

        await this.eventBus.publish(new SessionCreatedEvent(query.request.user, access, refresh));

        return this.responseService.okResponse("Session has successfully refreshed", {
            user: lodash.omit(query.request.user, "password")
        });
    }
}