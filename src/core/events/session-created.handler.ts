import { EventsHandler } from "@nestjs/cqrs";

import { SessionCreatedEvent } from "@common/events/session-created.event";
import { SessionQueue } from "@core/queues/session.queue";

@EventsHandler(SessionCreatedEvent)
export class SessionCreatedHandler {
	constructor(private readonly sessionQueue: SessionQueue) {}

	public async handle(event: SessionCreatedEvent) {
		return await this.sessionQueue.addCreated(event);
	}
}