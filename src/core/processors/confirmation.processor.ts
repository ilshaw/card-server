import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { ConfirmationRepository } from "@core/repositories/confirmation.repository";
import { ConfirmationCreatedJob } from "@common/jobs/confirmation-created.job";

@Processor("confirmation")
export class ConfirmationProcessor {
    constructor(private readonly confirmationRepository: ConfirmationRepository) {}

    @Process("created")
    public async processCreated(job: Job<ConfirmationCreatedJob>) {
        return await this.confirmationRepository.createByUserAndConfirm(job.data.user, job.data.confirm);
    }
}