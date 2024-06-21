import { BullModule as NestBullModule } from "@nestjs/bull";
import { Global, Module } from "@nestjs/common";

import { PasswordProcessor } from "@core/processors/password.processor";
import { EmailProcessor } from "@core/processors/email.processor";
import { ConfigService } from "@core/services/config.service";
import { PasswordQueue } from "@core/queues/password.queue";
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
            name: "password",
        }),
        NestBullModule.registerQueue({
            name: "email",
        })
    ],
    providers: [
        PasswordProcessor,
        EmailProcessor,
        PasswordQueue,
        EmailQueue
    ],
    exports: [
        PasswordQueue,
        EmailQueue
    ]
})
export class BullModule {}