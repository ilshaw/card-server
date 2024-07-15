import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";

import { Queue } from "bull";

import { SessionCreatedJob } from "@common/jobs/session-created.job";
import { SessionDeletedJob } from "@common/jobs/session-deleted.job";

@Injectable()
export class SessionQueue {
    constructor(@InjectQueue("session") private readonly sessionQueue: Queue) {}

    public async addCreated(data: SessionCreatedJob) {
        return await this.sessionQueue.add("created", data);
    }

    public async addDeleted(data: SessionDeletedJob) {
        return await this.sessionQueue.add("deleted", data);
    }
}