import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";

import { Queue } from "bull";

@Injectable()
export class SessionQueue {
	constructor(@InjectQueue("session") private readonly sessionQueue: Queue) {}

	public async addCreated(data: unknown) {
		return await this.sessionQueue.add("created", data);
	}
}