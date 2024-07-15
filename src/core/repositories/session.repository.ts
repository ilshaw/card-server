import { Injectable } from "@nestjs/common";

import { PrismaService } from "@core/services/prisma.service";
import { UserEntity } from "@common/entities/user.entity";

@Injectable()
export class SessionRepository {
    constructor(private readonly prismaService: PrismaService) {}

    public async upsertByUserAndAccessAndRefresh(user: UserEntity, access: AccessTokenType, refresh: RefreshTokenType) {
        return await this.prismaService.session.upsert({
            create: {
                user: {
                    connect: user
                },
                refresh: {
                    create: {
                        token: refresh
                    }
                },
                access: {
                    create: {
                        token: access
                    }
                }
            },
            update: {
                user: {
                    connect: user
                },
                refresh: {
                    update: {
                        token: refresh
                    }
                },
                access: {
                    update: {
                        token: access
                    }
                }
            },
            where: {
                user_id: user.id
            }
        });
    }

    public async findUniqueByUserAndRefresh(user: UserEntity, refresh: RefreshTokenType) {
        return await this.prismaService.session.findUnique({
            where: {
                refresh: {
                    token: refresh
                },
                user_id: user.id
            }
        });
    }

    public async findUniqueByUserAndAccess(user: UserEntity, access: AccessTokenType) {
        return await this.prismaService.session.findUnique({ 
            where: {
                access: {
                    token: access
                },
                user_id: user.id
            }
        });
    }

    public async deleteByUserAndAccess(user: UserEntity, access: AccessTokenType) {
        return await this.prismaService.session.delete({ 
            where: {
                access: {
                    token: access
                },
                user_id: user.id
            }
        });
    }

    public async findUniqueByUser(user: UserEntity) {
        return await this.prismaService.session.findUnique({ 
            where: {
                user_id: user.id
            }
        });
    }
}