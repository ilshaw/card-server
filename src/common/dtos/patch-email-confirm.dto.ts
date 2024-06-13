import { ApiProperty } from "@nestjs/swagger";

export class PatchEmailConfirmHeadersDto {
    @ApiProperty({ type: String, required: true, example: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJkZTVhNzE5LTkzZTQtNGJlYy05YjAwLTBhNDA2NWZhMjIwOCIsImlhdCI6MTcxODA1MTQ3MSwiZXhwIjoxNzE4MDUyMDcxfQ.W4bbXiFEr1yWyvly2WE9febzvr-6_EkPJWnYcTN8U-0lyvS71a1IlDNWcNc9191XbC7YQMJMy5rK87j7MhKY-__XhBIiM3f2oHfpJXettjeuLpq2kz9e-p3f9qIZLCnX3iuXS84zgo2PptNNKLIqxpSyLVi_oGRTleCOLHMQakYMkVgvy7IZ7T0Ry-1nwKPNb3_Mi1ILVapxPnBJ8Jl9B0XWx8Wjp7BybkarQyhNpB1AjZ1fmIt6avBpDagU7R9junl_8QP00eThV7CvdoK23tfvCr0g2Kq-4kqjmS0N9Yt1zlg1KKUQhVAaRaFKdkaZFjsQ4BoP-850TOSxwx9F-A", description: "Patch email confirm headers authorization" })
    public readonly authorization: string;
}