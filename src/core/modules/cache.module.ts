import { CacheModule as NestCacheModule } from "@nestjs/cache-manager";
import { Global, Module } from "@nestjs/common";

import * as redis from "cache-manager-redis-yet";

import { ConfigService } from "@core/services/config.service";
import { CacheService } from "@core/services/cache.service";

@Global()
@Module({
    imports: [
        NestCacheModule.registerAsync({
            useFactory: async (configService: ConfigService) => {
                const store = await redis.redisStore({
                    password: configService.getRedisPass()
                });

                return {
                    store: store,
                    host: configService.getRedisHost(),
                    port: configService.getRedisPort()
                }
            },
            inject: [
                ConfigService
            ]
        })
    ],
    providers: [
        CacheService
    ],
    exports: [
        CacheService
    ]
})
export class CacheModule {}
