import { Injectable } from "@nestjs/common";

import { PrismaService } from "@core/services/prisma.service";
import { CardEntity } from "@common/entities/card.entity";

@Injectable()
export class LinkRepository {
    constructor(private readonly prismaService: PrismaService) {}

    public async createManyByCardAndLinks(card: CardEntity, links: [{ type: string, url: string }]) {
        return await this.prismaService.link.createManyAndReturn({
            data: links.map((link) => ({
                card_id: card.id,
                type: link.type,
                url: link.url
            }))
        });
    }
}