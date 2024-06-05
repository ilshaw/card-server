import { Global, Module } from "@nestjs/common";

import { KeyService } from "@core/services/key.service";

@Global()
@Module({
	providers: [
		KeyService
	],
	exports: [
		KeyService
	]
})
export class KeyModule {}