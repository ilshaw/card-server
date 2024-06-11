import { Global, Module } from "@nestjs/common";

import { MinioService } from "@core/services/minio.service";

@Global()
@Module({
    providers: [
        MinioService
    ],
    exports: [
        MinioService
    ]
})
export class MinioModule {}