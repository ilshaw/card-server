import { UserEntity } from "@common/entities/user.entity";

export interface AccessPayloadInterface extends Pick<UserEntity, "id"> {}