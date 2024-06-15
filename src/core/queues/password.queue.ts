import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";

import { Queue } from "bull";

import { PasswordResetedJob } from "@common/jobs/password-reseted.job";

@Injectable()
export class PasswordQueue {
    constructor(@InjectQueue("password") private readonly passwordQueue: Queue) {}

    public async addReseted(data: PasswordResetedJob) {
        return await this.passwordQueue.add("reseted", data);
    }
}