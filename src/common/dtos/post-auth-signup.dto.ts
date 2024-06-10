import { ApiProperty } from "@nestjs/swagger";

import { UserEntity } from "@common/entities/user.entity";

export class PostAuthSignupDto implements Pick<UserEntity, "password" | "login"> {
	@ApiProperty({ type: String, required: true, example: "12345678", description: "Post auth signup password" })
	public readonly password: string;

	@ApiProperty({ type: String, required: true, example: "ilshaw", description: "Post auth signup login" })
	public readonly login: string;
}