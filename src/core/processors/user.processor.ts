import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { ConfirmationRepository } from "@core/repositories/confirmation.repository";
import { UserCreatedJob } from "@common/jobs/user-created.job";

@Processor("user")
export class UserProcessor {
    constructor(private readonly confirmationRepository: ConfirmationRepository) {}

    @Process("created")
    public async processCreated(job: Job<UserCreatedJob>) {
        return await this.confirmationRepository.createByUserAndConfirm(job.data.user, job.data.confirm);
    }
}