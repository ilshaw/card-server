import { UserEntity } from "@common/entities/user.entity";

export interface ConfirmPayloadInterface extends Pick<UserEntity, "id"> {}