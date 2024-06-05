import { UserEntity } from "@common/entities/user.entity";

export interface RefreshPayloadInterface extends Pick<UserEntity, "id"> {}