import { Injectable } from "@nestjs/common";

import { InternalServerErrorException } from "@common/exceptions/internal-server-error.exception";
import { UnauthorizedException } from "@common/exceptions/unauthorized.exception";
import { BadRequestException } from "@common/exceptions/bad-request.exception";
import { ForbiddenException } from "@common/exceptions/forbidden.exception";
import { NotFoundException } from "@common/exceptions/not-found.exception";
import { ConflictException } from "@common/exceptions/conflict.exception";

@Injectable()
export class ExceptionService {
    public internalServerErrorException(message: ExceptionMessageType, cause?: ExceptionCauseType) {
        return new InternalServerErrorException(message, cause);
    }

    public unauthorizedException(message: ExceptionMessageType) {
        return new UnauthorizedException(message);
    }

    public badRequestException(message: ExceptionMessageType) {
        return new BadRequestException(message);
    }

    public forbiddenException(message: ExceptionMessageType) {
        return new ForbiddenException(message);
    }

    public notFoundException(message: ExceptionMessageType) {
        return new NotFoundException(message);
    }

    public conflictException(message: ExceptionMessageType) {
        return new ConflictException(message);
    }
}