import { QueryHandler } from "@nestjs/cqrs";

import { GetUserCardQuery } from "@common/queries/get-user-card.query";
import { CardRepository } from "@core/repositories/card.repository";
import { ResponseService } from "@core/services/response.service";

@QueryHandler(GetUserCardQuery)
export class GetUserCardHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly cardRepository: CardRepository
    ) {}

    public async execute(query: GetUserCardQuery) {
        const card = await this.cardRepository.findUniqueByUserWithLinks(query.request.user);

        return this.responseService.okResponse("", {
            card: card
        });
    }
}