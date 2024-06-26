import { Global, Module } from "@nestjs/common";

import { GetSessionRefreshStrategy } from "@core/strategies/get-session-refresh.strategy";
import { PostAuthSignupStrategy } from "@core/strategies/post-auth-signup.strategy";
import { GetUserProfileStrategy } from "@core/strategies/get-user-profile.strategy";
import { PostAuthLoginStrategy } from "@core/strategies/post-auth-login.strategy";
import { GetAuthLogoutStrategy } from "@core/strategies/get-auth-logout.strategy";

@Global()
@Module({
    providers: [
        GetSessionRefreshStrategy,
        PostAuthSignupStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy,
        GetAuthLogoutStrategy
    ],
    exports: [
        GetSessionRefreshStrategy,
        PostAuthSignupStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy,
        GetAuthLogoutStrategy
    ]
})
export class StrategyModule {}