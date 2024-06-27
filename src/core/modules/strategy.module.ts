import { Global, Module } from "@nestjs/common";

import { GetSessionRefreshStrategy } from "@core/strategies/get-session-refresh.strategy";
import { PostAuthSignupStrategy } from "@core/strategies/post-auth-signup.strategy";
import { PostCardCreateStrategy } from "@core/strategies/post-card-create.strategy";
import { GetUserProfileStrategy } from "@core/strategies/get-user-profile.strategy";
import { PostAuthLoginStrategy } from "@core/strategies/post-auth-login.strategy";
import { GetAuthLogoutStrategy } from "@core/strategies/get-auth-logout.strategy";
import { GetUserCardStrategy } from "@core/strategies/get-user-card.strategy";

@Global()
@Module({
    providers: [
        GetSessionRefreshStrategy,
        PostAuthSignupStrategy,
        PostCardCreateStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy,
        GetAuthLogoutStrategy,
        GetUserCardStrategy
    ],
    exports: [
        GetSessionRefreshStrategy,
        PostAuthSignupStrategy,
        PostCardCreateStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy,
        GetAuthLogoutStrategy,
        GetUserCardStrategy
    ]
})
export class StrategyModule {}