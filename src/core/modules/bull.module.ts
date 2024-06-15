import { BullModule as NestBullModule } from "@nestjs/bull";
import { Global, Module } from "@nestjs/common";

import { ConfirmationProcessor } from "@core/processors/confirmation.processor";
import { PasswordProcessor } from "@core/processors/password.processor";
import { SessionProcessor } from "@core/processors/session.processor";
import { ConfirmationQueue } from "@core/queues/confirmation.queue";
import { EmailProcessor } from "@core/processors/email.processor";
import { ConfigService } from "@core/services/config.service";
import { PasswordQueue } from "@core/queues/password.queue";
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
            name: "password",
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
        PasswordProcessor,
        SessionProcessor,
        EmailProcessor,
        PasswordQueue,
        SessionQueue,
        EmailQueue
    ],
    exports: [
        ConfirmationQueue,
        PasswordQueue,
        SessionQueue,
        EmailQueue
    ]
})
export class BullModule {}