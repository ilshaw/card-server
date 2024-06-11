import { Global, Module } from "@nestjs/common";

import { PostAuthSignupStrategy } from "@core/strategies/post-auth-signup.strategy";
import { GetUserProfileStrategy } from "@core/strategies/get-user-profile.strategy";
import { PostAuthLoginStrategy } from "@core/strategies/post-auth-login.strategy";

@Global()
@Module({
    providers: [
        PostAuthSignupStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy
    ],
    exports: [
        PostAuthSignupStrategy,
        GetUserProfileStrategy,
        PostAuthLoginStrategy
    ]
})
export class StrategyModule {}