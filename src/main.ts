import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { NestFactory } from "@nestjs/core";

import { ConfigService } from "@core/services/config.service";
import { AppModule } from "@core/modules/app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

	const config = app.get(ConfigService);

	await app.listen(config.getPort());
}

bootstrap();