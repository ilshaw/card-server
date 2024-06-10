import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { SessionCreatedJob } from "@common/jobs/session-created.job";

@Processor("session")
export class SessionProcessor {
	constructor() {}

	@Process("created")
	public async processCreated(job: Job<SessionCreatedJob>) {
		return console.log(job.data);
	}
}