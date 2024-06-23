import { CqrsModule as NestCqrsModule } from "@nestjs/cqrs";
import { Global, Module } from "@nestjs/common";

import { PostAuthSignupHandler } from "@core/commands/post-auth-signup.handler";
import { GetTokenRefreshHandler } from "@core/queries/get-token-refresh.query";
import { PostAuthLoginHandler } from "@core/commands/post-auth-login.handler";
import { SessionCreatedHandler } from "@core/events/session-created.handler";
import { SessionDeletedHandler } from "@core/events/session-deleted.handler";
import { GetUserProfileHandler } from "@core/queries/get-user-profile.query";
import { GetAuthLogoutHandler } from "@core/queries/get-auth-logout.query";

@Global()
@Module({
    imports: [
    	NestCqrsModule.forRoot()
    ],
    providers: [
        GetTokenRefreshHandler,
        SessionCreatedHandler,
        SessionDeletedHandler,
        PostAuthSignupHandler,
        GetUserProfileHandler,
        PostAuthLoginHandler,
        GetAuthLogoutHandler
    ]
})
export class CqrsModule {}