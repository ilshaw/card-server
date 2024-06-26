import { Injectable } from "@nestjs/common";

import { PrismaService } from "@core/services/prisma.service";
import { UserEntity } from "@common/entities/user.entity";

@Injectable()
export class SessionRepository {
    constructor(private readonly prismaService: PrismaService) {}

    public async upsertByUserAndAccessAndRefresh(user: UserEntity, access: AccessTokenType, refresh: RefreshTokenType) {
        return await this.prismaService.session.upsert({
            create: {
                user_id: user.id,
                refresh: refresh,
                access: access
            },
            update: {
                refresh: refresh,
                access: access
            },
            where: {
                user_id: user.id
            }
        });
    }

    public async findUniqueByUserAndRefresh(user: UserEntity, refresh: RefreshTokenType) {
        return await this.prismaService.session.findUnique({
            where: {
                user_id_refresh: {
                    user_id: user.id,
                    refresh: refresh
                }
            }
        });
    }

    public async findUniqueByUserAndAccess(user: UserEntity, access: AccessTokenType) {
        return await this.prismaService.session.findUnique({ 
            where: {
                user_id_access: {
                    user_id: user.id,
                    access: access
                }
            }
        });
    }

    public async deleteByUserAndAccess(user: UserEntity, access: AccessTokenType) {
        return await this.prismaService.session.delete({ 
            where: {
                user_id_access: {
                    user_id: user.id,
                    access: access
                }
            }
        });
    }
}