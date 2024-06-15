import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { Global, Module } from "@nestjs/common";

import * as joi from "joi";

import { ConfigService } from "@core/services/config.service";

@Global()
@Module({
    imports: [
    	NestConfigModule.forRoot({
            validationSchema: joi.object({
                JWT_REFRESH_ALGORITHM: joi.string().required(),
                JWT_CONFIRM_ALGORITHM: joi.string().required(),
                JWT_ACCESS_ALGORITHM: joi.string().required(),
                JWT_REFRESH_EXPIRES: joi.number().required(),
                JWT_CONFIRM_EXPIRES: joi.number().required(),
                JWT_ACCESS_EXPIRES: joi.number().required(),
                NODEMAILER_SECURE: joi.boolean().required(),
                NODEMAILER_USER: joi.string().required(),
                NODEMAILER_PASS: joi.string().required(),
                NODEMAILER_HOST: joi.string().required(),
                NODEMAILER_PORT: joi.number().required(),
                MINIO_SECRET: joi.string().required(),
                MINIO_ACCESS: joi.string().required(),
                REDIS_PORT: joi.number().required(),
                REDIS_HOST: joi.string().required(),
                REDIS_PASS: joi.string().required(),
                MINIO_HOST: joi.string().required(),
                MINIO_PORT: joi.number().required(),
                MINIO_SSL: joi.boolean().required(),
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