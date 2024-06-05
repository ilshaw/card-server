import { Injectable } from "@nestjs/common";

import { Client } from "minio";

@Injectable()
export class MinioService extends Client {
	constructor() {
		super({
			secretKey: "MkVgDjSfBVsVxIt1EM87SpdvflOTcPa5bZ486fje",
			accessKey: "T1h1DB3B4icIJ6smOUpf",
			endPoint: "localhost",
			useSSL: false,
			port: 9000
		})
	}
}