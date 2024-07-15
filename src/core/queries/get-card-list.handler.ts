import { QueryHandler } from "@nestjs/cqrs";

import { GetCardListQuery } from "@common/queries/get-card-list.query";
import { CardRepository } from "@core/repositories/card.repository";
import { ResponseService } from "@core/services/response.service";

@QueryHandler(GetCardListQuery)
export class GetCardListHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly cardRepository: CardRepository
    ) {}

    public async execute() {
        const cards = await this.cardRepository.findMany();

        return this.responseService.okResponse("", {
            cards: cards
        });
    }
}