import { UserRequest } from "@common/interfaces/user-request.interface";

export class GetPasswordResetQuery {
    constructor(public readonly request: UserRequest) {}
}