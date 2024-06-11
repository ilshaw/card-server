import { UserRequest } from "@common/interfaces/user-request.interface";

export class GetUserProfileQuery {
    constructor(public readonly request: UserRequest) {}
}