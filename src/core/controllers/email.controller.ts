import { Controller, UseGuards, HttpCode, Patch, Request, Get } from "@nestjs/common";
import { ApiTags, ApiSecurity, ApiOkResponse } from "@nestjs/swagger";
import { QueryBus, CommandBus } from "@nestjs/cqrs";

import { FastifyReply } from "fastify";

import { PatchEmailConfirmCommand } from "@common/commands/patch-email-confirm.command";
import { PatchEmailConfirmHeadersDto } from "@common/dtos/patch-email-confirm.dto";
import { PatchEmailConfirmGuard } from "@core/guards/patch-email-confirm.guard";
import { GetEmailConfirmQuery } from "@common/queries/get-email-confirm.query";
import { GetEmailConfirmGuard } from "@core/guards/get-email-confirm.guard";
import { ResponseDecorator } from "@common/decorators/response.decorator";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { UserRequest } from "@common/interfaces/user-request.interface";

@ApiTags("Email")
@Controller("/email")
export class EmailController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @ApiOkResponse({ description: "Email has successfully confirmed" })
    @ApiSecurity("confirm")
    @UseGuards(PatchEmailConfirmGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Patch("/confirm")
    public async patchEmailConfirm(@Request() request: UserRequest<{ Headers: PatchEmailConfirmHeadersDto }>, @ResponseDecorator() response: FastifyReply) {
        return await this.commandBus.execute(new PatchEmailConfirmCommand(request, response));
    }

    @ApiOkResponse({ description: "Confirmation has successfully sended" })
    @ApiSecurity("access")
    @UseGuards(GetEmailConfirmGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/confirm")
    public async getEmailConfirm(@Request() request: UserRequest) {
        return await this.queryBus.execute(new GetEmailConfirmQuery(request));
    }
}