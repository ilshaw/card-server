import { UserEntity } from "@common/entities/user.entity";

export interface SessionCreatedJob {
    readonly refresh: RefreshTokenType
    readonly access: AccessTokenType
    readonly user: UserEntity
}