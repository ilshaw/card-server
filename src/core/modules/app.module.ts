import { Module } from "@nestjs/common";

import { RepositoryModule } from "@core/modules/repository.module";
import { ExceptionModule } from "@core/modules/exception.module";
import { ResponseModule } from "@core/modules/response.module";
import { StrategyModule } from "@core/modules/strategy.module";
import { ConfigModule } from "@core/modules/config.module";
import { BcryptModule } from "@core/modules/bcrypt.module";
import { PrismaModule } from "@core/modules/prisma.module";
import { MinioModule } from "@core/modules/minio.module";
import { AuthModule } from "@core/modules/auth.module";
import { CqrsModule } from "@core/modules/cqrs.module";
import { JwtModule } from "@core/modules/jwt.module";

@Module({
	imports: [
		RepositoryModule,
		ExceptionModule,
		ResponseModule,
		StrategyModule,
		ConfigModule,
		BcryptModule,
		PrismaModule,
		MinioModule,
		AuthModule,
		CqrsModule,
		JwtModule
	]
})
export class AppModule {}