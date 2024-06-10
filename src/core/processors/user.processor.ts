import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

@Processor("user")
export class UserProcessor {
	constructor() {}

	@Process("created")
	public async processCreated(job: Job) {
		return console.log(job.data);
	}
}