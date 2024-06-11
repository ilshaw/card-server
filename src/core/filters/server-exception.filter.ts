import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";

import { FastifyReply } from "fastify";

import { ServerExceptionClass } from "@common/classes/server-exception.class";

@Catch(ServerExceptionClass)
export class ServerExceptionFilter implements ExceptionFilter {
    public catch(exception: ServerExceptionClass, host: ArgumentsHost) {
        const response = exception.getResponse();
        const status = exception.getStatus();

        console.log(response.cause);
	
        return host.switchToHttp().getResponse<FastifyReply>().status(status).send(response);
    }
}