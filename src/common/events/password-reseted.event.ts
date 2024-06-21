import { UserEntity } from "@common/entities/user.entity";

export class PasswordResetedEvent {
    constructor(public readonly user: UserEntity, public readonly confirm: ConfirmTokenType) {}
}