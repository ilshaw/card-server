import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";

import { ServerExceptionClass } from "@common/classes/server-exception.class";

@Catch(ServerExceptionClass)
export class ServerExceptionFilter implements ExceptionFilter {
    public catch(exception: ServerExceptionClass, host: ArgumentsHost) {
        const response = exception.getResponse();
        const status = exception.getStatus();
	
        return host.switchToHttp().getResponse().status(status).send(response);
    }
}