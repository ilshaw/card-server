import { ApiProperty } from "@nestjs/swagger";

import { CardEntity } from "@common/entities/card.entity";
import { LinkEntity } from "@common/entities/link.entity";

export class PostCardCreateBodyLinksDto implements Pick<LinkEntity, "type" | "url"> {
    @ApiProperty({ type: String, required: true, example: "telegram", description: "Post card create links type field" })
    public readonly type: string;

    @ApiProperty({ type: String, required: true, example: "https://t.me/ilshaw", description: "Post card create links url field" })
    public readonly url: string;
}

export class PostCardCreateBodyDto implements Pick<CardEntity, "description"> {
    @ApiProperty({ type: String, required: true, example: "Middle backend developer", description: "Post card create description field" })
    public readonly description: string;

    @ApiProperty({ type: [PostCardCreateBodyLinksDto], required: true, example: [{ type: "telegram", url: "https://t.me/ilshaw" }], description: "Post card create links field" })
    public readonly links: [PostCardCreateBodyLinksDto]
}