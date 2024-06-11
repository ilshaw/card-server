import { Injectable, LoggerService } from "@nestjs/common";

import pino from "pino";

@Injectable()
export class PinoService implements LoggerService {
    private readonly pino = pino({
        transport: {
            target: "pino-pretty"
        }
    });

    public error(message: unknown) {
        return this.pino.error(message);
    }

    public warn(message: unknown) {
        return this.pino.warn(message);
    }

    public log(message: unknown) {
        return this.pino.info(message);
    }
}