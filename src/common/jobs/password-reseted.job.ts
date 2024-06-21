import { UserEntity } from "@common/entities/user.entity";

export interface PasswordResetedJob {
    readonly confirm: ConfirmTokenType
    readonly user: UserEntity
}