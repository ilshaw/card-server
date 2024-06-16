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
            algorithm: this.configService.getJwtAlgorithmRefresh(),
            expiresIn: this.configService.getJwtExpiresRefresh()
        });
    }

    public async signConfirm(payload: ConfirmPayloadInterface) {
        return this.nestJwtService.signAsync(payload, { 
            algorithm: this.configService.getJwtAlgorithmConfirm(),
            expiresIn: this.configService.getJwtExpiresConfirm()
        });
    }

    public async signAccess(payload: AccessPayloadInterface) {
        return this.nestJwtService.signAsync(payload, { 
            algorithm: this.configService.getJwtAlgorithmAccess(),
            expiresIn: this.configService.getJwtExpiresAccess()
        });
    }
}