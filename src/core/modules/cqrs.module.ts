import { CqrsModule as NestCqrsModule } from "@nestjs/cqrs";
import { Global, Module } from "@nestjs/common";

import { PostAuthSignupHandler } from "@core/commands/post-auth-signup.handler";

@Global()
@Module({
	imports: [
    	NestCqrsModule.forRoot()
	],
	providers: [
		PostAuthSignupHandler
	]
})
export class CqrsModule {}