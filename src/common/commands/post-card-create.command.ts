import { PostCardCreateBodyDto } from "@common/dtos/post-card-create.dto";
import { UserRequest } from "@common/interfaces/user-request.interface";

export class PostCardCreateCommand {
    constructor(public readonly request: UserRequest<{ Body: PostCardCreateBodyDto }>) {}
}