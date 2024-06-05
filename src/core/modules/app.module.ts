import { Module } from "@nestjs/common";

import { ResponseModule } from "@core/modules/response.module";
import { AuthModule } from "@core/modules/auth.module";
import { CqrsModule } from "@core/modules/cqrs.module";

@Module({
	imports: [
		ResponseModule,
		AuthModule,
		CqrsModule
	]
})
export class AppModule {}