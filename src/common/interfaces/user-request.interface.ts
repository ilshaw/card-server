import { RouteGenericInterface, FastifyRequest } from "fastify";

import { UserEntity } from "@common/entities/user.entity";

export interface UserRequest<T extends RouteGenericInterface = RouteGenericInterface> extends FastifyRequest<T> {
    readonly user: Omit<UserEntity, "password">
}