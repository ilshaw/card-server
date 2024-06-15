import { EventsHandler } from "@nestjs/cqrs";

import { PasswordResetedEvent } from "@common/events/password-reseted.event";
import { PasswordQueue } from "@core/queues/password.queue";

@EventsHandler(PasswordResetedEvent)
export class PasswordResetedHandler {
    constructor(private readonly passwordQueue: PasswordQueue) {}

    public async handle(event: PasswordResetedEvent) {
        return await this.passwordQueue.addReseted(event);
    }
}