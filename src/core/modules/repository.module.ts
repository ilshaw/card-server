import { Global, Module } from "@nestjs/common";

import { SessionRepository } from "@core/repositories/session.repository";
import { UserRepository } from "@core/repositories/user.repository";

@Global()
@Module({
    providers: [
        SessionRepository,
        UserRepository
    ],
    exports: [
        SessionRepository,
        UserRepository
    ]
})
export class RepositoryModule {}