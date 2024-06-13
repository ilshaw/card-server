import { EventsHandler } from "@nestjs/cqrs";

import { EmailConfirmedEvent } from "@common/events/email-confirmed.event";
import { EmailQueue } from "@core/queues/email.queue";

@EventsHandler(EmailConfirmedEvent)
export class EmailConfirmedHandler {
    constructor(private readonly emailQueue: EmailQueue) {}

    public async handle(event: EmailConfirmedEvent) {
        return await this.emailQueue.addConfirmed(event);
    }
}