import { ApiProperty } from "@nestjs/swagger";

import { UserEntity } from "@common/entities/user.entity";

export class PostAuthLoginBodyDto implements Pick<UserEntity, "password" | "email"> {
    @ApiProperty({ type: String, required: true, example: "12345678", description: "Post auth login password field" })
    public readonly password: string;

    @ApiProperty({ type: String, required: true, example: "pe4enka519@gmail.com", description: "Post auth login email field" })
    public readonly email: string;
}