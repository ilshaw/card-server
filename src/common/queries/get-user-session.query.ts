import { UserRequest } from "@common/interfaces/user-request.interface";

export class GetUserSessionQuery {
    constructor(public readonly request: UserRequest) {}
}