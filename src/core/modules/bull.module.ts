import { BullModule as NestBullModule } from "@nestjs/bull";
import { Global, Module } from "@nestjs/common";

import { SessionProcessor } from "@core/processors/session.processor";
import { EmailProcessor } from "@core/processors/email.processor";
import { UserProcessor } from "@core/processors/user.processor";
import { ConfigService } from "@core/services/config.service";
import { SessionQueue } from "@core/queues/session.queue";
import { EmailQueue } from "@core/queues/email.queue";
import { UserQueue } from "@core/queues/user.queue";

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
            name: "session",
        }),
        NestBullModule.registerQueue({
            name: "email",
        }),
        NestBullModule.registerQueue({
            name: "user",
        })
    ],
    providers: [
        SessionProcessor,
        EmailProcessor,
        UserProcessor,
        SessionQueue,
        EmailQueue,
        UserQueue
    ],
    exports: [
        SessionQueue,
        EmailQueue,
        UserQueue
    ]
})
export class BullModule {}