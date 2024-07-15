import { QueryHandler } from "@nestjs/cqrs";

import { GetUserIdCardQuery } from "@common/queries/get-user-id-card.query";
import { UserRepository } from "@core/repositories/user.repository";
import { CardRepository } from "@core/repositories/card.repository";
import { ResponseService } from "@core/services/response.service";

@QueryHandler(GetUserIdCardQuery)
export class GetUserIdCardHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository,
        private readonly cardRepository: CardRepository
    ) {}

    public async execute(query: GetUserIdCardQuery) {
        const user = await this.userRepository.findUniqueById(query.request.params.id);

        const card = await this.cardRepository.findUniqueByUserWithLinks(user);

        return this.responseService.okResponse("", {
            card: card
        });
    }
}