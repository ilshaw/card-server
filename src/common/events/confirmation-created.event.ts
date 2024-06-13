import { UserEntity } from "@common/entities/user.entity";

export class ConfirmationCreatedEvent {
    constructor(public readonly user: Omit<UserEntity, "password">, public readonly confirm: ConfirmTokenType) {}
}