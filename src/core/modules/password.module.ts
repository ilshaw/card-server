import { Module } from "@nestjs/common";

import { PasswordController } from "@core/controllers/password.controller";

@Module({
    controllers: [
        PasswordController
    ]
})
export class PasswordModule {}