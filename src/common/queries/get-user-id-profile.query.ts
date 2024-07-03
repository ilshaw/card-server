import { FastifyRequest } from "fastify";

import { GetUserIdProfileParamsDto } from "@common/dtos/get-user-id-profile.dto";

export class GetUserIdProfileQuery {
    constructor(public readonly request: FastifyRequest<{ Params: GetUserIdProfileParamsDto }>) {}
}