import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";

import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	public async onModuleDestroy() {
		return await this.$disconnect();
	}

	public async onModuleInit() {
		return await this.$connect();
	}
}