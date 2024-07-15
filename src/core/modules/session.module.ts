import { Module } from "@nestjs/common";

import { SessionController } from "@core/controllers/session.controller";

@Module({
    controllers: [
        SessionController
    ]
})
export class SessionModule {}