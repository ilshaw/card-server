import { Processor, Process } from "@nestjs/bull";

import { Job } from "bull";

import { UserCreatedJob } from "@common/jobs/user-created.job";

@Processor("user")
export class UserProcessor {
    constructor() {}

    @Process("created")
    public async processCreated(job: Job<UserCreatedJob>) {

    }
}