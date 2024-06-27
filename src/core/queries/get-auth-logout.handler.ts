import { QueryHandler, EventBus } from "@nestjs/cqrs";

import { SessionDeletedEvent } from "@common/events/session-deleted.event";
import { GetAuthLogoutQuery } from "@common/queries/get-auth-logout.query";
import { ResponseService } from "@core/services/response.service";
import { CookieService } from "@core/services/cookie.service";

@QueryHandler(GetAuthLogoutQuery)
export class GetAuthLogoutHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly cookieService: CookieService,
        private readonly eventBus: EventBus
    ) {}

    public async execute(query: GetAuthLogoutQuery) {
        this.cookieService.clearRefresh(query.response);
        this.cookieService.clearAccess(query.response);

        await this.eventBus.publish(new SessionDeletedEvent(query.request.user, query.request.cookies.access));

        return this.responseService.okResponse("User has successfully logged out");
    }
}