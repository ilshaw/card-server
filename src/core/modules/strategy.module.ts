import { Global, Module } from "@nestjs/common";

import { PostAuthSignupStrategy } from "@core/strategies/post-auth-signup.strategy";

@Global()
@Module({
	providers: [
		PostAuthSignupStrategy
	],
	exports: [
		PostAuthSignupStrategy
	]
})
export class StrategyModule {}