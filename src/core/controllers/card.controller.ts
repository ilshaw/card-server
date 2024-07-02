import { Controller, UseGuards, HttpCode, Post, Request } from "@nestjs/common";
import { ApiTags, ApiSecurity, ApiOkResponse, ApiBody } from "@nestjs/swagger";
import { CommandBus } from "@nestjs/cqrs";

import { PostCardCreateCommand } from "@common/commands/post-card-create.command";
import { PostCardCreateBodyDto } from "@common/dtos/post-card-create.dto";
import { PostCardCreateGuard } from "@core/guards/post-card-create.guard";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { UserRequest } from "@common/interfaces/user-request.interface";

@ApiTags("Card")
@Controller("/card")
export class CardController {
    constructor(private readonly commandBus: CommandBus) {}

    @ApiOkResponse({ description: "Card has successfully created" })
    @ApiSecurity("access")
    @ApiBody({ type: PostCardCreateBodyDto, required: true, description: "Post card create body" })
    @UseGuards(PostCardCreateGuard)
    @HttpCode(ResponseStatusEnum.CREATED)
    @Post("/create")
    public async postCardCreate(@Request() request: UserRequest<{ Body: PostCardCreateBodyDto }>) {
        return await this.commandBus.execute(new PostCardCreateCommand(request));
    }
}