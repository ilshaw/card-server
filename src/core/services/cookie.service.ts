import { Injectable } from "@nestjs/common";

import { FastifyReply } from "fastify";

import { ConfigService } from "@core/services/config.service";

@Injectable()
export class CookieService {
    constructor(private readonly configService: ConfigService) {}

    public setRefresh(refresh: string, response: FastifyReply) {
        return response.setCookie("refresh", refresh, { 
            sameSite: "strict", 
            httpOnly: true, 
            maxAge: this.configService.getCookieExpiresRefresh(),
            path: "/"
        });
    }

    public setAccess(access: string, response: FastifyReply) {
        return response.setCookie("access", access, { 
            sameSite: "strict", 
            httpOnly: true, 
            maxAge: this.configService.getCookieExpiresAccess(),
            path: "/"
        });
    }
}