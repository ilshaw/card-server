import { EventsHandler } from "@nestjs/cqrs";

import { ConfirmationCreatedEvent } from "@common/events/confirmation-created.event";
import { ConfirmationQueue } from "@core/queues/confirmation.queue";

@EventsHandler(ConfirmationCreatedEvent)
export class ConfirmationCreatedHandler {
    constructor(private readonly confirmationQueue: ConfirmationQueue) {}

    public async handle(event: ConfirmationCreatedEvent) {
        return await this.confirmationQueue.addCreated(event);
    }
}