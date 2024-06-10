import { Global, Module } from "@nestjs/common";

import { PostAuthSignupStrategy } from "@core/strategies/post-auth-signup.strategy";
import { GetUserProfileStrategy } from "@core/strategies/get-user-profile.strategy";

@Global()
@Module({
	providers: [
		PostAuthSignupStrategy,
		GetUserProfileStrategy
	],
	exports: [
		PostAuthSignupStrategy,
		GetUserProfileStrategy
	]
})
export class StrategyModule {}