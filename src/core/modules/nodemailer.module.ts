import { Global, Module } from "@nestjs/common";

import { NodemailerService } from "@core/services/nodemailer.service";

@Global()
@Module({
    providers: [
        NodemailerService
    ],
    exports: [
        NodemailerService
    ]
})
export class NodemailerModule {}