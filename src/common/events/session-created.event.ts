import { UserEntity } from "@common/entities/user.entity";

export class SessionCreatedEvent {
    constructor(public readonly user: Omit<UserEntity, "password">, public readonly access: AccessTokenType, public readonly refresh: RefreshTokenType) {}
}