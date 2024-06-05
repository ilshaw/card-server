import { FastifyRequest } from "fastify";

import { PostAuthSignupDto } from "@common/dtos/post-auth-signup.dto";

export class PostAuthSignupCommand {
	constructor(public readonly request: FastifyRequest<{ Body: PostAuthSignupDto }>) {}
}