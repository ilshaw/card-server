import { UserEntity } from "@common/entities/user.entity";

export interface SessionDeletedJob {
    readonly access: AccessTokenType
    readonly user: UserEntity
}