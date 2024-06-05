import { Injectable } from "@nestjs/common";

import * as path from "path";
import * as fs from "fs";

@Injectable()
export class KeyService {
	public getPrivate() {
		return fs.readFileSync(path.resolve(process.cwd(), "keys", "private.key"));
	}

	public getPublic() {
		return fs.readFileSync(path.resolve(process.cwd(), "keys", "public.key"));
	}
}