import { FastifyReply } from "fastify";

import { PostAuthLoginBodyDto } from "@common/dtos/post-auth-login.dto";
import { UserRequest } from "@common/interfaces/user-request.interface";

export class PostAuthLoginCommand {
    constructor(public readonly request: UserRequest<{ Body: PostAuthLoginBodyDto }>, public readonly response: FastifyReply) {}
}