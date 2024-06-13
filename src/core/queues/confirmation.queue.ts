import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";

import { Queue } from "bull";

import { ConfirmationCreatedJob } from "@common/jobs/confirmation-created.job";

@Injectable()
export class ConfirmationQueue {
    constructor(@InjectQueue("confirmation") private readonly confirmationQueue: Queue) {}

    public async addCreated(data: ConfirmationCreatedJob) {
        return await this.confirmationQueue.add("created", data);
    }
}