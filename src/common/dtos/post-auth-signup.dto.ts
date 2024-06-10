import { ApiProperty } from "@nestjs/swagger";

import { UserEntity } from "@common/entities/user.entity";

export class PostAuthSignupDto implements Pick<UserEntity, "password" | "login"> {
	@ApiProperty({ type: String, required: true })
	public readonly password: string;

	@ApiProperty({ type: String, required: true })
	public readonly login: string;
}