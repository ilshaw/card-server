import { ApiProperty } from "@nestjs/swagger";

import { UserEntity } from "@common/entities/user.entity";

export class PostAuthSignupBodyDto implements Pick<UserEntity, "password" | "email"> {
    @ApiProperty({ type: String, required: true, example: "12345678", description: "Post auth signup password field" })
    public readonly password: string;

    @ApiProperty({ type: String, required: true, example: "pe4enka519@gmail.com", description: "Post auth signup email field" })
    public readonly email: string;
}