import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";

import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";
import { PinoService } from "@core/services/pino.service";

@Catch()
export class BaseExceptionFilter implements ExceptionFilter {
    constructor(private readonly pinoService: PinoService) {}

    public catch(exception: unknown, host: ArgumentsHost) {
        this.pinoService.error(exception);

        return host.switchToHttp().getResponse().status(ExceptionStatusEnum.INTERNAL_SERVER_ERROR).send({
            message: "Unexpected error has occurred",
            status: ExceptionStatusEnum.INTERNAL_SERVER_ERROR,
            cause: exception
        });
    }
}