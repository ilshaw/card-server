import { Injectable } from "@nestjs/common";

import { PrismaService } from "@core/services/prisma.service";
import { UserEntity } from "@common/entities/user.entity";

@Injectable()
export class SessionRepository {
	constructor(private readonly prismaService: PrismaService) {}

	public async createByUserAndAccessAndRefresh(user: UserEntity, access: string, refresh: string) {
		return await this.prismaService.session.create({
			data: {
				user: {
					connect: user
				},
				refresh: refresh,
				access: access
			}
		});
	}

	public async findUniqueByUserAndRefresh(user: UserEntity, refresh: string) {
		return await this.prismaService.session.findUnique({
			where: {
				user_id_refresh: {
					user_id: user.id,
					refresh: refresh
				}
			}
		});
	}

	public async findUniqueByUserAndAccess(user: UserEntity, access: string) {
		return await this.prismaService.session.findUnique({ 
			where: {
				user_id_access: {
					user_id: user.id,
					access: access
				}
			}
		});
	}
}