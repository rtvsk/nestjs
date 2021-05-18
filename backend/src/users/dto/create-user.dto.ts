import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ example: "mail@mail.ru", description: "users email" })
    readonly email: string;

    @ApiProperty({ example: "123", description: "users password" })
    readonly password: string;

}