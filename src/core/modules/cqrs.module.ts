import { CqrsModule as NestCqrsModule } from "@nestjs/cqrs";
import { Global, Module } from "@nestjs/common";

import { PostAuthSignupHandler } from "@core/commands/post-auth-signup.handler";
import { SessionCreatedHandler } from "@core/events/session-created.handler";
import { GetUserProfileHandler } from "@core/queries/get-user-profile.query";
import { UserCreatedHandler } from "@core/events/user-created.handler";

@Global()
@Module({
    imports: [
    	NestCqrsModule.forRoot()
    ],
    providers: [
        PostAuthSignupHandler,
        SessionCreatedHandler,
        GetUserProfileHandler,
        UserCreatedHandler
    ]
})
export class CqrsModule {}