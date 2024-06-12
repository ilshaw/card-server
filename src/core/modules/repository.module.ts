import { Global, Module } from "@nestjs/common";

import { ConfirmationRepository } from "@core/repositories/confirmation.repository";
import { SessionRepository } from "@core/repositories/session.repository";
import { UserRepository } from "@core/repositories/user.repository";

@Global()
@Module({
    providers: [
        ConfirmationRepository,
        SessionRepository,
        UserRepository
    ],
    exports: [
        ConfirmationRepository,
        SessionRepository,
        UserRepository
    ]
})
export class RepositoryModule {}