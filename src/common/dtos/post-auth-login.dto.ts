import { ApiProperty } from "@nestjs/swagger";

import { UserEntity } from "@common/entities/user.entity";

export class PostAuthLoginBodyDto implements Pick<UserEntity, "password" | "login"> {
    @ApiProperty({ type: String, required: true, example: "12345678", description: "Post auth login password field" })
    public readonly password: string;

    @ApiProperty({ type: String, required: true, example: "ilshaw", description: "Post auth login login field" })
    public readonly login: string;
}