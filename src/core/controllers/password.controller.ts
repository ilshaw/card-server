import { Controller, UseGuards, HttpCode, Patch, Request, Get } from "@nestjs/common";
import { ApiTags, ApiBody, ApiSecurity, ApiOkResponse } from "@nestjs/swagger";
import { QueryBus, CommandBus } from "@nestjs/cqrs";

import { FastifyReply } from "fastify";

import { PatchPasswordResetHeadersDto, PatchPasswordResetBodyDto } from "@common/dtos/patch-password-reset.dto";
import { PatchPasswordResetCommand } from "@common/commands/patch-password-reset.command";
import { PatchPasswordResetGuard } from "@core/guards/patch-password-reset.guard";
import { GetPasswordResetQuery } from "@common/queries/get-password-reset.query";
import { GetPasswordResetGuard } from "@core/guards/get-password-reset.guard";
import { ResponseDecorator } from "@common/decorators/response.decorator";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { UserRequest } from "@common/interfaces/user-request.interface";

@ApiTags("Password")
@Controller("/password")
export class PasswordController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @ApiOkResponse({ description: "Password has successfully reseted" })
    @ApiSecurity("confirm")
    @ApiBody({ type: PatchPasswordResetBodyDto, required: true, description: "Patch password reset body" })
    @UseGuards(PatchPasswordResetGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Patch("/reset")
    public async patchPasswordReset(@Request() request: UserRequest<{ Headers: PatchPasswordResetHeadersDto, Body: PatchPasswordResetBodyDto }>, @ResponseDecorator() response: FastifyReply) {
        return await this.commandBus.execute(new PatchPasswordResetCommand(request, response));
    }

    @ApiOkResponse({ description: "Confirmation has successfully sended" })
    @ApiSecurity("access")
    @UseGuards(GetPasswordResetGuard)
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/reset")
    public async getPasswordReset(@Request() request: UserRequest) {
        return await this.queryBus.execute(new GetPasswordResetQuery(request));
    }
}