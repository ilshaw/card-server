import { ApiProperty } from "@nestjs/swagger";

export class GetTokenRefreshCookiesDto {
    @ApiProperty({ type: String, required: true, example: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3MjZiNTg2LTViMTItNGNmNS1hMjU3LTRmMzVmMGNlMjA2NSIsImlhdCI6MTcxODE0MjgyMCwiZXhwIjoxNzQ5Njc4ODIwfQ.JQsYkzDXOYJTj2wt0nXmdKGO5b9CAaWxocVMWqWOfGXLszCZGfa0Sab2s7lqO1UKwmo8TdkFhOlTb9gtU8S7jU0nNwvtAorsxhC8-Ziqduz6qmD26TbW0mlL4-PF8_xcNNOYl5PVEngDeD6xHKdIq6uOaSE87UNcBkC09ruW43I7chb1WuqDAHtP9hSms-o8vSfB2telLkuJsRFDiqJCJ8QCWP3a3Lj0FpieVYUm6LMElb6zuJdrK7IAK1pV38Qslxsd88Zs_-MBdZKEiQXzk5_EJloPLv5xMJ0SHMG9tpIWAY1XvS62nigCv9Lgid5QbSeKUs-AkGkt_gyk30W-gg", description: "Get user profile refresh cookie" })
    public readonly refresh: string;
}