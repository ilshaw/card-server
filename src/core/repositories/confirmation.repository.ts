import { Injectable } from "@nestjs/common";

import { PrismaService } from "@core/services/prisma.service";
import { UserEntity } from "@common/entities/user.entity";

@Injectable()
export class ConfirmationRepository {
    constructor(private readonly prismaService: PrismaService) {}

    public async createByUserAndConfirm(user: UserEntity, confirm: ConfirmTokenType) {
        return await this.prismaService.confirmation.create({
            data: {
                user: {
                    connect: user
                },
                confirm: confirm
            }
        });
    }

    public async findUniqueByUserAndConfirm(user: UserEntity, confirm: ConfirmTokenType) {
        return await this.prismaService.confirmation.findUnique({
            where: {
                user_id_confirm: {
                    user_id: user.id,
                    confirm: confirm
                }
            }
        });
    }

    public async deleteByUserAndConfirm(user: UserEntity, confirm: ConfirmTokenType) {
        return await this.prismaService.confirmation.delete({
            where: {
                user_id_confirm: {
                    user_id: user.id,
                    confirm: confirm
                }
            }
        });
    }
}