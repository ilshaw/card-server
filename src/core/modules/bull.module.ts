import { BullModule as NestBullModule } from "@nestjs/bull";
import { Global, Module } from "@nestjs/common";

import { SessionProcessor } from "@core/processors/session.processor";
import { UserProcessor } from "@core/processors/user.processor";
import { SessionQueue } from "@core/queues/session.queue";
import { UserQueue } from "@core/queues/user.queue";
import { ConfigService } from "@core/services/config.service";

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
            name: "user",
        })
    ],
    providers: [
        SessionProcessor,
        UserProcessor,
        SessionQueue,
        UserQueue
    ],
    exports: [
        SessionQueue,
        UserQueue
    ]
})
export class BullModule {}