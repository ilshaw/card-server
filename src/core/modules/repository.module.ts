import { Global, Module } from "@nestjs/common";

import { SessionRepository } from "@core/repositories/session.repository";
import { UserRepository } from "@core/repositories/user.repository";
import { CardRepository } from "@core/repositories/card.repository";
import { LinkRepository } from "@core/repositories/link.repository";

@Global()
@Module({
    providers: [
        SessionRepository,
        UserRepository,
        CardRepository,
        LinkRepository
    ],
    exports: [
        SessionRepository,
        UserRepository,
        CardRepository,
        LinkRepository
    ]
})
export class RepositoryModule {}