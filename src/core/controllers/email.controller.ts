import { Controller, UseGuards, HttpCode, Patch, Request } from "@nestjs/common";
import { ApiTags, ApiSecurity, ApiOkResponse } from "@nestjs/swagger";
import { CommandBus } from "@nestjs/cqrs";

import { FastifyReply } from "fastify";

import { PatchEmailConfirmCommand } from "@common/commands/patch-email-confirm.command";
import { PatchEmailConfirmHeadersDto } from "@common/dtos/patch-email-confirm.dto";
import { PatchEmailConfirmGuard } from "@core/guards/patch-email-confirm.guard";
import { ResponseDecorator } from "@common/decorators/response.decorator";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { UserRequest } from "@common/interfaces/user-request.interface";

@ApiTags("Email")
@Controller("/email")
export class EmailController {
    constructor(private readonly commandBus: CommandBus) {}

    @ApiOkResponse({ description: "Email has successfully confirmed" })
    @ApiSecurity("confirm")
    @UseGuards(PatchEmailConfirmGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Patch("/confirm")
    public async patchEmailConfirm(@Request() request: UserRequest<{ Headers: PatchEmailConfirmHeadersDto }>, @ResponseDecorator() response: FastifyReply) {
        return await this.commandBus.execute(new PatchEmailConfirmCommand(request, response));
    }
}