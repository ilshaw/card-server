import { Injectable } from "@nestjs/common";

import { PrismaService } from "@core/services/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) {}

    public async createByEmailAndPassword(email: string, password: string) {
        return await this.prismaService.user.create({
            data: {
                password: password,
                email: email
            }
        });
    }

    public async findUniqueByEmail(email: string) {
        return await this.prismaService.user.findUnique({
            where: {
                email: email
            }
        });
    }

    public async findUniqueById(id: string) {
        return await this.prismaService.user.findUnique({ 
            where: {
                id: id
            }
        });
    }

    public async confirmById(id: string) {
        return await this.prismaService.user.update({
            data: {
                confirmed: true
            },
            where: {
                id: id
            }
        });
    }

    public async resetById(id: string, password: string) {
        return await this.prismaService.user.update({
            data: {
                password: password
            },
            where: {
                id: id
            }
        });
    }
}