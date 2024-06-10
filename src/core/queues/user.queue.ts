import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";

import { Queue } from "bull";

@Injectable()
export class UserQueue {
	constructor(@InjectQueue("user") private readonly userQueue: Queue) {}

	public async addCreated(data: unknown) {
		return await this.userQueue.add("created", data);
	}
}