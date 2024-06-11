import { FastifyReply } from "fastify";

import { UserRequest } from "@common/interfaces/user-request.interface";

export class GetTokenRefreshQuery {
    constructor(public readonly request: UserRequest, public readonly response: FastifyReply) {}
}