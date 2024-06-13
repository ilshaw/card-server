import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { ConfirmationRepository } from "@core/repositories/confirmation.repository";
import { EmailConfirmedJob } from "@common/jobs/email-confirmed.job";

@Processor("email")
export class EmailProcessor {
    constructor(private readonly confirmationRepository: ConfirmationRepository) {}

    @Process("confirmed")
    public async processConfirmed(job: Job<EmailConfirmedJob>) {
        return await this.confirmationRepository.deleteByUserAndConfirm(job.data.user, job.data.confirm);
    }
}