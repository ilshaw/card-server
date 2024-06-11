import { Injectable } from "@nestjs/common";

import { Client } from "minio";

import { ConfigService } from "@core/services/config.service";

@Injectable()
export class MinioService extends Client {
    constructor(private readonly configService: ConfigService) {
        super({
            secretKey: configService.getMinioSecret(),
            accessKey: configService.getMinioAccess(),
            endPoint: configService.getMinioHost(),
            useSSL: configService.getMinioSsl(),
            port: configService.getMinioPort()
        });
    }
}