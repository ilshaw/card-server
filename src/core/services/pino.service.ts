import { Injectable, LoggerService } from "@nestjs/common";

import pino from "pino";

@Injectable()
export class PinoService implements LoggerService {
    private readonly pino = pino({
        transport: {
            target: "pino-pretty"
        }
    });

    public error(message: string) {
        return this.pino.error(message);
    }

    public warn(message: string) {
        return this.pino.warn(message);
    }

    public log(message: string) {
        return this.pino.info(message);
    }
}