import { APP_INTERCEPTOR, APP_FILTER } from "@nestjs/core";
import { Module } from "@nestjs/common";

import { ClientExceptionInterceptor } from "@core/interceptors/client-exception.interceptor";
import { ClientResponseInterceptor } from "@core/interceptors/client-response.interceptor";
import { ClientExceptionFilter } from "@core/filters/client-exception.filter";
import { ServerExceptionFilter } from "@core/filters/server-exception.filter";
import { RepositoryModule } from "@core/modules/repository.module";
import { ExceptionModule } from "@core/modules/exception.module";
import { ResponseModule } from "@core/modules/response.module";
import { StrategyModule } from "@core/modules/strategy.module";
import { BcryptModule } from "@core/modules/bcrypt.module";
import { ConfigModule } from "@core/modules/config.module";
import { CookieModule } from "@core/modules/cookie.module";
import { PrismaModule } from "@core/modules/prisma.module";
import { TokenModule } from "@core/modules/token.module";
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
        TokenModule,
        AuthModule,
        BullModule,
        CqrsModule,
        PinoModule,
        UserModule,
        JwtModule,
        KeyModule
    ],
    providers: [
        {
            useClass: ClientResponseInterceptor,
            provide: APP_INTERCEPTOR
        },
        {
            useClass: ClientExceptionInterceptor,
            provide: APP_INTERCEPTOR
        },
        {
            useClass: ClientExceptionFilter,
            provide: APP_FILTER
        },
        {
            useClass: ServerExceptionFilter,
            provide: APP_FILTER
        }
    ]
})
export class AppModule {}