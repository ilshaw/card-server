import { CqrsModule as NestCqrsModule } from "@nestjs/cqrs";
import { Global, Module } from "@nestjs/common";

import { PatchPasswordResetHandler } from "@core/commands/patch-password-reset.handler";
import { ConfirmationCreatedHandler } from "@core/events/confirmation-created.handler";
import { PatchEmailConfirmHandler } from "@core/commands/patch-email-confirm.handler";
import { GetPasswordResetHandler } from "@core/queries/get-password-reset.query";
import { PostAuthSignupHandler } from "@core/commands/post-auth-signup.handler";
import { GetEmailConfirmHandler } from "@core/queries/get-email-confirm.query";
import { GetTokenRefreshHandler } from "@core/queries/get-token-refresh.query";
import { PasswordResetedHandler } from "@core/events/password-reseted.handler";
import { PostAuthLoginHandler } from "@core/commands/post-auth-login.handler";
import { EmailConfirmedHandler } from "@core/events/email-confirmed.handler";
import { GetUserProfileHandler } from "@core/queries/get-user-profile.query";
import { SessionCreatedHandler } from "@core/events/session-created.handler";

@Global()
@Module({
    imports: [
    	NestCqrsModule.forRoot()
    ],
    providers: [
        ConfirmationCreatedHandler,
        PatchPasswordResetHandler,
        PatchEmailConfirmHandler,
        GetPasswordResetHandler,
        PasswordResetedHandler,
        GetEmailConfirmHandler,
        GetTokenRefreshHandler,
        PostAuthSignupHandler,
        EmailConfirmedHandler,
        GetUserProfileHandler,
        SessionCreatedHandler,
        PostAuthLoginHandler
    ]
})
export class CqrsModule {}