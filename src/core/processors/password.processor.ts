import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { PasswordResetedJob } from "@common/jobs/password-reseted.job";

@Processor("password")
export class PasswordProcessor {
    constructor() {}

    @Process("reseted")
    public async processReseted(job: Job<PasswordResetedJob>) {
        
    }
}