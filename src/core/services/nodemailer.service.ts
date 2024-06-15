import { Injectable } from "@nestjs/common";

import * as nodemailer from "nodemailer";

import { ConfigService } from "@core/services/config.service";

@Injectable()
export class NodemailerService {
    private readonly transporter: nodemailer.Transporter;

    constructor(private readonly configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            auth: {
                user: this.configService.getNodemailerUser(),
                pass: this.configService.getNodemailerPass()
            },
            secure: this.configService.getNodemailerSecure(),
            host: this.configService.getNodemailerHost(),
            port: this.configService.getNodemailerPort(),
        });
    }

    public async sendMail(options: Omit<nodemailer.SendMailOptions, "from">) {
        return await this.transporter.sendMail({ ...options, from: this.configService.getNodemailerUser() });
    }
}