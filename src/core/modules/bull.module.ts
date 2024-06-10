import { BullModule as NestBullModule } from "@nestjs/bull";
import { Global, Module } from "@nestjs/common";

import { SessionProcessor } from "@core/processors/session.processor";
import { UserProcessor } from "@core/processors/user.processor";
import { SessionQueue } from "@core/queues/session.queue";
import { UserQueue } from "@core/queues/user.queue";

@Global()
@Module({
	imports: [
    	NestBullModule.forRoot({
			redis: {
				password: "redis",
				host: "localhost",
        		port: 6379,
			}
		}),
		NestBullModule.registerQueue({
			name: "session",
		}),
		NestBullModule.registerQueue({
			name: "user",
		})
	],
	providers: [
		SessionProcessor,
		UserProcessor,
		SessionQueue,
		UserQueue
	],
	exports: [
		SessionQueue,
		UserQueue
	]
})
export class BullModule {}