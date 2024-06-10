import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { Global, Module } from "@nestjs/common";

import { JwtService } from "@core/services/jwt.service";
import { KeyService } from "@core/services/key.service";

@Global()
@Module({
	imports: [
		NestJwtModule.registerAsync({
			useFactory: (keyService: KeyService) => ({ 
				privateKey: keyService.getPrivate() 
			}),
			inject: [
				KeyService
			]
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