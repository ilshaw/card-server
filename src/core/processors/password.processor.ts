import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { ConfirmationRepository } from "@core/repositories/confirmation.repository";
import { PasswordResetedJob } from "@common/jobs/password-reseted.job";

@Processor("password")
export class PasswordProcessor {
    constructor(private readonly confirmationRepository: ConfirmationRepository) {}

    @Process("reseted")
    public async processReseted(job: Job<PasswordResetedJob>) {
        return await this.confirmationRepository.deleteByUserAndConfirm(job.data.user, job.data.confirm);
    }
}