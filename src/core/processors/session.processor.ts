import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { SessionRepository } from "@core/repositories/session.repository";
import { SessionCreatedJob } from "@common/jobs/session-created.job";

@Processor("session")
export class SessionProcessor {
	constructor(private readonly sessionRepository: SessionRepository) {}

	@Process("created")
	public async processCreated(job: Job<SessionCreatedJob>) {
		return await this.sessionRepository.createByUserAndAccessAndRefresh(job.data.user, job.data.access, job.data.refresh);
	}
}