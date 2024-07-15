import { Response } from "@nestjs/common";

export const ResponseDecorator = () => Response({ passthrough: true });