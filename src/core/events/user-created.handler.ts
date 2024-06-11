import { EventsHandler } from "@nestjs/cqrs";

import { UserCreatedEvent } from "@common/events/user-created.event";
import { UserQueue } from "@core/queues/user.queue";

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler {
    constructor(private readonly userQueue: UserQueue) {}

    public async handle(event: UserCreatedEvent) {
        return await this.userQueue.addCreated(event);
    }
}