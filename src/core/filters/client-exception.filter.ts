import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";

import { ClientExceptionClass } from "@common/classes/client-exception.class";

@Catch(ClientExceptionClass)
export class ClientExceptionFilter implements ExceptionFilter {
    public catch(exception: ClientExceptionClass, host: ArgumentsHost) {
        const response = exception.getResponse();
        const status = exception.getStatus();
	
        return host.switchToHttp().getResponse().status(status).send(response);
    }
}