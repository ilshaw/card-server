import { UserEntity } from "@common/entities/user.entity";

export class UserCreatedEvent {
    constructor(public readonly user: Omit<UserEntity, "password">) {}
}