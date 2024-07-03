import { ApiProperty } from "@nestjs/swagger";

import { UserEntity } from "@common/entities/user.entity";

export class GetUserIdProfileParamsDto implements Pick<UserEntity, "id"> {
    @ApiProperty({ type: String, required: true, example: "98ff3567-9f45-43a9-9717-4d200ea9ee0f", description: "Get user id profile id param" })
    public readonly id: string;
}