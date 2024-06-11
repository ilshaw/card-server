import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { NestFactory } from "@nestjs/core";

import cookie from "@fastify/cookie";

import { ConfigService } from "@core/services/config.service";
import { PinoService } from "@core/services/pino.service";
import { AppModule } from "@core/modules/app.module";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { bufferLogs: true });

    const logger = app.get(PinoService);

    app.useLogger(logger);

    app.register(cookie);

    const config = app.get(ConfigService);

  	const document = SwaggerModule.createDocument(app, new DocumentBuilder()
        .setTitle("Auth server")
        .setDescription("Auth server implementation")
        .build()
    );

  	SwaggerModule.setup("swagger", app, document);

    await app.listen(config.getAppPort());
}

bootstrap();