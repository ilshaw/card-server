import { Module } from "@nestjs/common";

import { CardController } from "@core/controllers/card.controller";

@Module({
    controllers: [
        CardController
    ]
})
export class CardModule {}