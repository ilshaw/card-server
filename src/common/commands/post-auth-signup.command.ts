import { FastifyRequest, FastifyReply } from "fastify";

import { PostAuthSignupBodyDto } from "@common/dtos/post-auth-signup.dto";

export class PostAuthSignupCommand {
    constructor(public readonly request: FastifyRequest<{ Body: PostAuthSignupBodyDto }>, public readonly response: FastifyReply) {}
}