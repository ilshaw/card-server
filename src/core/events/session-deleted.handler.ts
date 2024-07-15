import { EventsHandler } from "@nestjs/cqrs";

import { SessionDeletedEvent } from "@common/events/session-deleted.event";
import { SessionQueue } from "@core/queues/session.queue";

@EventsHandler(SessionDeletedEvent)
export class SessionDeletedHandler {
    constructor(private readonly sessionQueue: SessionQueue) {}

    public async handle(event: SessionDeletedEvent) {
        return await this.sessionQueue.addDeleted(event);
    }
}