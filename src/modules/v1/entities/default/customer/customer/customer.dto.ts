import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class CustomerRequestDto {
    @IsNotEmpty()
    @ApiProperty({example: 'Ehsan Munna', maxLength: 150})
    name: string;
}
export class CustomerDto {}
