import { UserEntity } from "@common/entities/user.entity";

export class PostAuthSignupDto implements Pick<UserEntity, "password" | "login"> {
	public readonly password: string;
	public readonly login: string;
}