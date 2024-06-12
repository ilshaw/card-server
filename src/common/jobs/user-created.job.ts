import { UserEntity } from "@common/entities/user.entity";

export interface UserCreatedJob {
    readonly confirm: ConfirmTokenType
    readonly user: Omit<UserEntity, "password">
}