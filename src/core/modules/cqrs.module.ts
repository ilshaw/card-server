import { CqrsModule as NestCqrsModule } from "@nestjs/cqrs";
import { Global, Module } from "@nestjs/common";

import { GetSessionRefreshHandler } from "@core/queries/get-session-refresh.handler";
import { GetUserIdProfileHandler } from "@core/queries/get-user-id-profile.handler";
import { PostAuthSignupHandler } from "@core/commands/post-auth-signup.handler";
import { PostCardCreateHandler } from "@core/commands/post-card-create.handler";
import { GetUserProfileHandler } from "@core/queries/get-user-profile.handler";
import { GetUserSessionHandler } from "@core/queries/get-user-session.handler";
import { PostAuthLoginHandler } from "@core/commands/post-auth-login.handler";
import { GetUserIdCardHandler } from "@core/queries/get-user-id-card.handler";
import { SessionCreatedHandler } from "@core/events/session-created.handler";
import { SessionDeletedHandler } from "@core/events/session-deleted.handler";
import { GetAuthLogoutHandler } from "@core/queries/get-auth-logout.handler";
import { GetUserCardHandler } from "@core/queries/get-user-card.handler";
import { GetCardListHandler } from "@core/queries/get-card-list.handler";
import { GetUserListHandler } from "@core/queries/get-user-list.handler";

@Global()
@Module({
    imports: [
    	NestCqrsModule.forRoot()
    ],
    providers: [
        GetSessionRefreshHandler,
        GetUserIdProfileHandler,
        SessionCreatedHandler,
        SessionDeletedHandler,
        PostAuthSignupHandler,
        PostCardCreateHandler,
        GetUserProfileHandler,
        GetUserSessionHandler,
        PostAuthLoginHandler,
        GetAuthLogoutHandler,
        GetUserIdCardHandler,
        GetUserCardHandler,
        GetCardListHandler,
        GetUserListHandler
    ]
})
export class CqrsModule {}