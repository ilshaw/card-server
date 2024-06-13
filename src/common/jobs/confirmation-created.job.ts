import { UserEntity } from "@common/entities/user.entity";

export interface ConfirmationCreatedJob {
    readonly confirm: ConfirmTokenType
    readonly user: Omit<UserEntity, "password">
}