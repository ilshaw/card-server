import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { ExceptionService } from "@core/services/exception.service";

@Injectable()
export class PostAuthSignupGuard extends AuthGuard("post-auth-signup") implements CanActivate {
	constructor(private readonly exceptionService: ExceptionService) {
		super();
	}

	public handleRequest<T = unknown>(error: unknown, user: T) {
		if(error) {
			throw error;
		}
		else {
			if(user) {
				throw this.exceptionService.conflictException("Login is already taken");
			}
			else {
				return user;
			}
		}
	}

	public canActivate(context: ExecutionContext) {
		return super.canActivate(context);
	}
}