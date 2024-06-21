import { UserEntity } from "@common/entities/user.entity";

export interface EmailConfirmedJob {
    readonly confirm: ConfirmTokenType
    readonly user: UserEntity
}