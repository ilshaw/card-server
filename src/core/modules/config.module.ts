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
				JWT_ACCESS_ALGORITHM: joi.string().required(),
				JWT_REFRESH_EXPIRES: joi.number().required(),
				JWT_ACCESS_EXPIRES: joi.number().required(),
				MINIO_SECRET: joi.string().required(),
				MINIO_ACCESS: joi.string().required(),
				MINIO_HOST: joi.string().required(),
				MINIO_PORT: joi.number().required(),
				MINIO_SSL: joi.boolean().required(),
				APP_PORT: joi.number().required(),
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