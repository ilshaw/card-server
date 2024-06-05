import { Module } from "@nestjs/common";

import { RepositoryModule } from "@core/modules/repository.module";
import { ResponseModule } from "@core/modules/response.module";
import { PrismaModule } from "@core/modules/prisma.module";
import { AuthModule } from "@core/modules/auth.module";
import { CqrsModule } from "@core/modules/cqrs.module";

@Module({
	imports: [
		RepositoryModule,
		ResponseModule,
		PrismaModule,
		AuthModule,
		CqrsModule
	]
})
export class AppModule {}