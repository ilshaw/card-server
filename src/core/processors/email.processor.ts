import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { EmailConfirmedJob } from "@common/jobs/email-confirmed.job";

@Processor("email")
export class EmailProcessor {
    constructor() {}

    @Process("confirmed")
    public async processConfirmed(job: Job<EmailConfirmedJob>) {
        
    }
}