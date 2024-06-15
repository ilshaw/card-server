import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { ConfirmationRepository } from "@core/repositories/confirmation.repository";
import { ConfirmationCreatedJob } from "@common/jobs/confirmation-created.job";
import { NodemailerService } from "@core/services/nodemailer.service";

@Processor("confirmation")
export class ConfirmationProcessor {
    constructor(
        private readonly confirmationRepository: ConfirmationRepository,
        private readonly nodemailerService: NodemailerService
    ) {}

    @Process("created")
    public async processCreated(job: Job<ConfirmationCreatedJob>) {
        await this.confirmationRepository.createByUserAndConfirm(job.data.user, job.data.confirm);

        await this.nodemailerService.sendMail({
            to: job.data.user.email,
            subject: "Confirmation",
            text: job.data.confirm
        });
    }
}