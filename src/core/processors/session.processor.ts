import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

@Processor("session")
export class SessionProcessor {
	constructor() {}

	@Process("created")
	public async processCreated(job: Job) {
		return console.log(job.data);
	}
}