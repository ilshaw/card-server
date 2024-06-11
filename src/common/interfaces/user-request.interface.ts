import { RouteGenericInterface, FastifyRequest } from "fastify";

import { UserEntity } from "@common/entities/user.entity";

export interface UserRequest<R extends RouteGenericInterface = RouteGenericInterface> extends FastifyRequest<R> {
    readonly user: Omit<UserEntity, "password">
}