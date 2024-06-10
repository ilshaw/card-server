import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";

import { Queue } from "bull";

import { UserCreatedJob } from "@common/jobs/user-created.job";

@Injectable()
export class UserQueue {
	constructor(@InjectQueue("user") private readonly userQueue: Queue) {}

	public async addCreated(data: UserCreatedJob) {
		return await this.userQueue.add("created", data);
	}
}