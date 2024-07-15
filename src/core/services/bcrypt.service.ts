import { Injectable } from "@nestjs/common";

import * as bcrypt from "bcrypt";

@Injectable()
export class BcryptService {
    public async compareData(data: string, encrypted: string) {
        return bcrypt.compare(data, encrypted);
    }

    public async hashData(data: string) {
        return bcrypt.hash(data, await bcrypt.genSalt());
    }
}