import { Global, Module } from "@nestjs/common";

import { ExceptionService } from "@core/services/exception.service";

@Global()
@Module({
    providers: [
        ExceptionService
    ],
    exports: [
        ExceptionService
    ]
})
export class ExceptionModule {}