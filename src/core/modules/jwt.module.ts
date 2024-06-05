import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { Global, Module } from "@nestjs/common";

import { ConfigService } from "@core/services/config.service";
import { JwtService } from "@core/services/jwt.service";

@Global()
@Module({
	imports: [
		NestJwtModule.registerAsync({
			useFactory: (configService: ConfigService) => ({ secret: configService.getJwtSecret() }),
			inject: [ConfigService]
		})
	],
	providers: [
		JwtService
	],
	exports: [
		JwtService
	]
})
export class JwtModule {}