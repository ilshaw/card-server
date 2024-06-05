import { Module } from "@nestjs/common";

import { ResponseModule } from "@core/modules/response.module";
import { PrismaModule } from "@core/modules/prisma.module";
import { AuthModule } from "@core/modules/auth.module";
import { CqrsModule } from "@core/modules/cqrs.module";

@Module({
	imports: [
		ResponseModule,
		PrismaModule,
		AuthModule,
		CqrsModule
	]
})
export class AppModule {}