import { ApiProperty } from "@nestjs/swagger";


export class CustomerRequestDto {
    @ApiProperty({example: 'Ehsan Munna', maxLength: 150})
    name: string;
}
export class CustomerDto {}
