import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";

import { Queue } from "bull";

import { SessionCreatedJob } from "@common/jobs/session-created.job";

@Injectable()
export class SessionQueue {
    constructor(@InjectQueue("session") private readonly sessionQueue: Queue) {}

    public async addCreated(data: SessionCreatedJob) {
        return await this.sessionQueue.add("created", data);
    }
}