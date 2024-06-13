import { FastifyReply } from "fastify";

import { PatchEmailConfirmHeadersDto } from "@common/dtos/patch-email-confirm.dto";
import { UserRequest } from "@common/interfaces/user-request.interface";

export class PatchEmailConfirmCommand {
    constructor(public readonly request: UserRequest<{ Headers: PatchEmailConfirmHeadersDto }>, public readonly response: FastifyReply) {}
}