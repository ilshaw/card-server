import { Global, Module } from "@nestjs/common";

import { GetTokenRefreshStrategy } from "@core/strategies/get-token-refresh.strategy";
import { PostAuthSignupStrategy } from "@core/strategies/post-auth-signup.strategy";
import { GetUserProfileStrategy } from "@core/strategies/get-user-profile.strategy";
import { PostAuthLoginStrategy } from "@core/strategies/post-auth-login.strategy";

@Global()
@Module({
    providers: [
        GetTokenRefreshStrategy,
        PostAuthSignupStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy
    ],
    exports: [
        GetTokenRefreshStrategy,
        PostAuthSignupStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy
    ]
})
export class StrategyModule {}