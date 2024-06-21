import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";

import { FastifyReply } from "fastify";

import { ServerExceptionClass } from "@common/classes/server-exception.class";
import { PinoService } from "@core/services/pino.service";

@Catch(ServerExceptionClass)
export class ServerExceptionFilter implements ExceptionFilter {
    constructor(private readonly pinoService: PinoService) {}

    public catch(exception: ServerExceptionClass, host: ArgumentsHost) {
        const response = exception.getResponse();
        const status = exception.getStatus();

        this.pinoService.error(response);
	
        return host.switchToHttp().getResponse<FastifyReply>().status(status).send(response);
    }
}