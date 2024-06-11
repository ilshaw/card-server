import { Global, Module } from "@nestjs/common";

import { BcryptService } from "@core/services/bcrypt.service";

@Global()
@Module({
    providers: [
        BcryptService
    ],
    exports: [
        BcryptService
    ]
})
export class BcryptModule {}