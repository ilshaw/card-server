import { BullModule as NestBullModule } from "@nestjs/bull";
import { Global, Module } from "@nestjs/common";

import { SessionProcessor } from "@core/processors/session.processor";
import { ConfigService } from "@core/services/config.service";
import { SessionQueue } from "@core/queues/session.queue";

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
        })
    ],
    providers: [
        SessionProcessor,
        SessionQueue
    ],
    exports: [
        SessionQueue
    ]
})
export class BullModule {}