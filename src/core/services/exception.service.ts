import { Injectable } from "@nestjs/common";

import { UnauthorizedException } from "@common/exceptions/unauthorized.exception";
import { BadRequestException } from "@common/exceptions/bad-request.exception";
import { ForbiddenException } from "@common/exceptions/forbidden.exception";
import { NotFoundException } from "@common/exceptions/not-found.exception";
import { ConflictException } from "@common/exceptions/conflict.exception";

@Injectable()
export class ExceptionService {
	public unauthorizedException(message: ResponseMessageType) {
		return new UnauthorizedException(message);
	}

	public badRequestException(message: ResponseMessageType) {
		return new BadRequestException(message);
	}

	public forbiddenException(message: ResponseMessageType) {
		return new ForbiddenException(message);
	}

	public notFoundException(message: ResponseMessageType) {
		return new NotFoundException(message);
	}

	public conflictException(message: ResponseMessageType) {
		return new ConflictException(message);
	}
}