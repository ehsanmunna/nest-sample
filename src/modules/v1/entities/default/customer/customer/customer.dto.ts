import { ApiProperty, IntersectionType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CommonDto } from "src/common/common.dto";


export class CustomerRequestDto {
    @IsNotEmpty()
    @ApiProperty({example: 'Ehsan Munna', maxLength: 150})
    name: string;
}

export class CustomerDto extends IntersectionType(CommonDto, CustomerRequestDto) {}
