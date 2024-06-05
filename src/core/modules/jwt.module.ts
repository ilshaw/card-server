import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { Global, Module } from "@nestjs/common";

import { JwtService } from "@core/services/jwt.service";

@Global()
@Module({
	imports: [
		NestJwtModule.register({
			secret: "secret"
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