import { Module } from "@nestjs/common";

import { AuthModule } from "@core/modules/auth.module";
import { CqrsModule } from "@core/modules/cqrs.module";

@Module({
	imports: [
		AuthModule,
		CqrsModule
	]
})
export class AppModule {}