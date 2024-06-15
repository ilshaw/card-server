import { FastifyReply } from "fastify";

import { PatchPasswordResetHeadersDto, PatchPasswordResetBodyDto } from "@common/dtos/patch-password-reset.dto";
import { UserRequest } from "@common/interfaces/user-request.interface";

export class PatchPasswordResetCommand {
    constructor(public readonly request: UserRequest<{ Headers: PatchPasswordResetHeadersDto, Body: PatchPasswordResetBodyDto }>, public readonly response: FastifyReply) {}
}