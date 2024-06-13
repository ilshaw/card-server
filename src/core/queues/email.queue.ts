import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";

import { Queue } from "bull";

import { EmailConfirmedJob } from "@common/jobs/email-confirmed.job";

@Injectable()
export class EmailQueue {
    constructor(@InjectQueue("email") private readonly emailQueue: Queue) {}

    public async addConfirmed(data: EmailConfirmedJob) {
        return await this.emailQueue.add("confirmed", data);
    }
}