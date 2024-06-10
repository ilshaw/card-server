import { UserEntity } from "@common/entities/user.entity";

export interface SessionCreatedJob {
	readonly refresh: string
	readonly access: string
	readonly user: UserEntity
}