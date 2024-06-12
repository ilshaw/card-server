import { JwtService as NestJwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";

import { RefreshPayloadInterface } from "@common/interfaces/refresh-payload.interface";
import { ConfirmPayloadInterface } from "@common/interfaces/confirm-payload.interface";
import { AccessPayloadInterface } from "@common/interfaces/access-payload.interface";
import { ConfigService } from "@core/services/config.service";

@Injectable()
export class JwtService {
    constructor(
        private readonly nestJwtService: NestJwtService, 
        private readonly configService: ConfigService
    ) {}

    public async signRefresh(payload: RefreshPayloadInterface) {
        return this.nestJwtService.signAsync(payload, { 
            algorithm: this.configService.getJwtRefreshAlgorithm(),
            expiresIn: this.configService.getJwtRefreshExpires()
        });
    }

    public async signConfirm(payload: ConfirmPayloadInterface) {
        return this.nestJwtService.signAsync(payload, { 
            algorithm: this.configService.getJwtConfirmAlgorithm(),
            expiresIn: this.configService.getJwtConfirmExpires()
        });
    }

    public async signAccess(payload: AccessPayloadInterface) {
        return this.nestJwtService.signAsync(payload, { 
            algorithm: this.configService.getJwtAccessAlgorithm(),
            expiresIn: this.configService.getJwtAccessExpires()
        });
    }
}