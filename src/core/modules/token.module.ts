import { Module } from "@nestjs/common";

import { TokenController } from "@core/controllers/token.controller";

@Module({
    controllers: [
        TokenController
    ]
})
export class TokenModule {}