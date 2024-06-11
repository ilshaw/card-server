import { Global, Module } from "@nestjs/common";

import { PinoService } from "@core/services/pino.service";

@Global()
@Module({
    providers: [
        PinoService
    ],
    exports: [
        PinoService
    ]
})
export class PinoModule {}