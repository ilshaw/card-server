import { FastifyRequest } from "fastify";

import { GetUserIdCardParamsDto } from "@common/dtos/get-user-id-card.dto";

export class GetUserIdCardQuery {
    constructor(public readonly request: FastifyRequest<{ Params: GetUserIdCardParamsDto }>) {}
}