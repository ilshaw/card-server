import { Module } from "@nestjs/common";

import { RepositoryModule } from "@core/modules/repository.module";
import { ExceptionModule } from "@core/modules/exception.module";
import { ResponseModule } from "@core/modules/response.module";
import { StrategyModule } from "@core/modules/strategy.module";
import { BcryptModule } from "@core/modules/bcrypt.module";
import { ConfigModule } from "@core/modules/config.module";
import { CookieModule } from "@core/modules/cookie.module";
import { PrismaModule } from "@core/modules/prisma.module";
import { MinioModule } from "@core/modules/minio.module";
import { AuthModule } from "@core/modules/auth.module";
import { BullModule } from "@core/modules/bull.module";
import { CqrsModule } from "@core/modules/cqrs.module";
import { PinoModule } from "@core/modules/pino.module";
import { UserModule } from "@core/modules/user.module";
import { JwtModule } from "@core/modules/jwt.module";
import { KeyModule } from "@core/modules/key.module";

@Module({
    imports: [
        RepositoryModule,
        ExceptionModule,
        ResponseModule,
        StrategyModule,
        BcryptModule,
        ConfigModule,
        CookieModule,
        PrismaModule,
        MinioModule,
        AuthModule,
        BullModule,
        CqrsModule,
        PinoModule,
        UserModule,
        JwtModule,
        KeyModule
    ]
})
export class AppModule {}