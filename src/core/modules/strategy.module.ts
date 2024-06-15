import { Global, Module } from "@nestjs/common";

import { PatchEmailConfirmStrategy } from "@core/strategies/patch-email-confirm.strategy";
import { GetPasswordResetStrategy } from "@core/strategies/get-password-reset.strategy";
import { PatchPasswordResetStrategy } from "@core/strategies/patch-password-strategy";
import { GetEmailConfirmStrategy } from "@core/strategies/get-email-confirm.strategy";
import { GetTokenRefreshStrategy } from "@core/strategies/get-token-refresh.strategy";
import { PostAuthSignupStrategy } from "@core/strategies/post-auth-signup.strategy";
import { GetUserProfileStrategy } from "@core/strategies/get-user-profile.strategy";
import { PostAuthLoginStrategy } from "@core/strategies/post-auth-login.strategy";

@Global()
@Module({
    providers: [
        PatchPasswordResetStrategy,
        PatchEmailConfirmStrategy,
        GetPasswordResetStrategy,
        GetEmailConfirmStrategy,
        GetTokenRefreshStrategy,
        PostAuthSignupStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy
    ],
    exports: [
        PatchPasswordResetStrategy,
        PatchEmailConfirmStrategy,
        GetPasswordResetStrategy,
        GetEmailConfirmStrategy,
        GetTokenRefreshStrategy,
        PostAuthSignupStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy
    ]
})
export class StrategyModule {}