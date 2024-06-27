import { Injectable } from "@nestjs/common";

import { PrismaService } from "@core/services/prisma.service";
import { UserEntity } from "@common/entities/user.entity";

@Injectable()
export class CardRepository {
    constructor(private readonly prismaService: PrismaService) {}

    public async createByUserAndDescription(user: UserEntity, description: string) {
        return await this.prismaService.card.create({
            data: {
                user: {
                    connect: user
                },
                description: description
            }
        });
    }

    public async findUniqueByUserWithLinks(user: UserEntity) {
        return await this.prismaService.card.findUnique({
            include: {
                links: true
            },
            where: {
                user_id: user.id
            }
        });
    }

    public async findUniqueByUser(user: UserEntity) {
        return await this.prismaService.card.findUnique({
            where: {
                user_id: user.id
            }
        });
    }
}