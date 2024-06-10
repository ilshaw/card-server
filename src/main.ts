import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { NestFactory } from "@nestjs/core";

import { ConfigService } from "@core/services/config.service";
import { AppModule } from "@core/modules/app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

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