import { UserEntity } from "@common/entities/user.entity";

export class SessionCreatedEvent {
    constructor(public readonly user: UserEntity, public readonly access: string, public readonly refresh: string) {}
}