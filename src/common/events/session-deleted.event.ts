import { UserEntity } from "@common/entities/user.entity";

export class SessionDeletedEvent {
    constructor(public readonly user: UserEntity) {}
}