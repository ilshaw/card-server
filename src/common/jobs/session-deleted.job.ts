import { UserEntity } from "@common/entities/user.entity";

export interface SessionDeletedJob {
    readonly user: UserEntity
}