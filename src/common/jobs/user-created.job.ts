import { UserEntity } from "@common/entities/user.entity";

export interface UserCreatedJob {
    readonly user: UserEntity
}