import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsEmail()
    username: string;

    @ApiProperty()
    password: string;
}
