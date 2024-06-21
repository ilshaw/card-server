import { UserEntity } from "@common/entities/user.entity";

export class EmailConfirmedEvent {
    constructor(public readonly user: UserEntity, public readonly confirm: ConfirmTokenType) {}
}