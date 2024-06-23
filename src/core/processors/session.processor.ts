import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { SessionRepository } from "@core/repositories/session.repository";
import { SessionCreatedJob } from "@common/jobs/session-created.job";
import { SessionDeletedJob } from "@common/jobs/session-deleted.job";

@Processor("session")
export class SessionProcessor {
    constructor(private readonly sessionRepository: SessionRepository) {}

    @Process("created")
    public async processCreated(job: Job<SessionCreatedJob>) {
        return await this.sessionRepository.upsertByUserAndAccessAndRefresh(job.data.user, job.data.access, job.data.refresh);
    }

    @Process("deleted")
    public async processDeleted(job: Job<SessionDeletedJob>) {
        return await this.sessionRepository.deleteByUser(job.data.user);
    }
}