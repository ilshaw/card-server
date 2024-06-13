import { UserRequest } from "@common/interfaces/user-request.interface";

export class GetEmailConfirmQuery {
    constructor(public readonly request: UserRequest) {}
}