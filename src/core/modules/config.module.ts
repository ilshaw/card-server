import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { Global, Module } from "@nestjs/common";

import * as joi from "joi";

import { ConfigService } from "@core/services/config.service";

@Global()
@Module({
    imports: [
    	NestConfigModule.forRoot({
            validationSchema: joi.object({
                COOKIE_EXPIRES_REFRESH: joi.number().required(),
                COOKIE_EXPIRES_ACCESS: joi.number().required(),
                JWT_ALGORITHM_REFRESH: joi.string().required(),
                JWT_ALGORITHM_ACCESS: joi.string().required(),
                JWT_EXPIRES_REFRESH: joi.number().required(),
                JWT_EXPIRES_ACCESS: joi.number().required(),
                REDIS_PORT: joi.number().required(),
                REDIS_HOST: joi.string().required(),
                REDIS_PASS: joi.string().required(),
                APP_PORT: joi.number().required()
            })
        })
    ],
    providers: [
        ConfigService
    ],
    exports: [
        ConfigService
    ]
})
export class ConfigModule {}