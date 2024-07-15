import { UserRequest } from "@common/interfaces/user-request.interface";

export class GetUserCardQuery {
    constructor(public readonly request: UserRequest) {}
}