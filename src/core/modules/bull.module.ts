import { BullModule as NestBullModule } from "@nestjs/bull";
import { Global, Module } from "@nestjs/common";

@Global()
@Module({
	imports: [
    	NestBullModule.forRoot({
			redis: {
				password: "redis",
				host: "localhost",
        		port: 6379,
			}
		})
	]
})
export class BullModule {}