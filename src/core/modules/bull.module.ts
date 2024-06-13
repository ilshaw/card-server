import { BullModule as NestBullModule } from "@nestjs/bull";
import { Global, Module } from "@nestjs/common";

import { ConfirmationProcessor } from "@core/processors/confirmation.processor";
import { SessionProcessor } from "@core/processors/session.processor";
import { EmailProcessor } from "@core/processors/email.processor";
import { ConfigService } from "@core/services/config.service";
import { ConfirmationQueue } from "@core/queues/confirmation.queue";
import { SessionQueue } from "@core/queues/session.queue";
import { EmailQueue } from "@core/queues/email.queue";

@Global()
@Module({
    imports: [
    	NestBullModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                redis: {
                    password: configService.getRedisPass(),
                    host: configService.getRedisHost(),
                    port: configService.getRedisPort()
                }
            }),
            inject: [
                ConfigService
            ]
        }),
        NestBullModule.registerQueue({
            name: "confirmation",
        }),
        NestBullModule.registerQueue({
            name: "session",
        }),
        NestBullModule.registerQueue({
            name: "email",
        })
    ],
    providers: [
        ConfirmationProcessor,
        ConfirmationQueue,
        SessionProcessor,
        EmailProcessor,
        SessionQueue,
        EmailQueue
    ],
    exports: [
        ConfirmationQueue,
        SessionQueue,
        EmailQueue
    ]
})
export class BullModule {}