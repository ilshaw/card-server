import { Module } from "@nestjs/common";

import { UserController } from "@core/controllers/user.controller";

@Module({
    controllers: [
        UserController
    ]
})
export class UserModule {}