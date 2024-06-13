import { CqrsModule as NestCqrsModule } from "@nestjs/cqrs";
import { Global, Module } from "@nestjs/common";

import { PatchEmailConfirmHandler } from "@core/commands/patch-email-confirm.handler";
import { PostAuthSignupHandler } from "@core/commands/post-auth-signup.handler";
import { GetTokenRefreshHandler } from "@core/queries/get-token-refresh.query";
import { PostAuthLoginHandler } from "@core/commands/post-auth-login.handler";
import { EmailConfirmedHandler } from "@core/events/email-confirmed.handler";
import { GetUserProfileHandler } from "@core/queries/get-user-profile.query";
import { SessionCreatedHandler } from "@core/events/session-created.handler";
import { UserCreatedHandler } from "@core/events/user-created.handler";

@Global()
@Module({
    imports: [
    	NestCqrsModule.forRoot()
    ],
    providers: [
        PatchEmailConfirmHandler,
        GetTokenRefreshHandler,
        PostAuthSignupHandler,
        EmailConfirmedHandler,
        GetUserProfileHandler,
        SessionCreatedHandler,
        PostAuthLoginHandler,
        UserCreatedHandler
    ]
})
export class CqrsModule {}