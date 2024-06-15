import { UserEntity } from "@common/entities/user.entity";

export class PasswordResetedEvent {
    constructor(public readonly user: Omit<UserEntity, "password">, public readonly confirm: ConfirmTokenType) {}
}