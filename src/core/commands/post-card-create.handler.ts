import { CommandHandler } from "@nestjs/cqrs";

import * as lodash from "lodash";

import { PostCardCreateCommand } from "@common/commands/post-card-create.command";
import { CardRepository } from "@core/repositories/card.repository";
import { LinkRepository } from "@core/repositories/link.repository";
import { ResponseService } from "@core/services/response.service";

@CommandHandler(PostCardCreateCommand)
export class PostCardCreateHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly cardRepository: CardRepository,
        private readonly linkRepository: LinkRepository
    ) {}

    public async execute(command: PostCardCreateCommand) {
        const card = await this.cardRepository.createByUserAndDescription(command.request.user, command.request.body.description);

        const links = await this.linkRepository.createManyByCardAndLinks(card, command.request.body.links);

        return this.responseService.createdResponse("Card has successfully created", {
            card: lodash.assign(card, { 
                links: links 
            })
        });
    }
}