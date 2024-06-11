import { Module } from "@nestjs/common";

import { AuthController } from "@core/controllers/auth.controller";

@Module({
    controllers: [
        AuthController
    ]
})
export class AuthModule {}