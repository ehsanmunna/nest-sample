import { ApiProperty, IntersectionType } from "@nestjs/swagger";
import { IsNotEmpty, IsString, isString } from "class-validator";
import { CommonDto, CommonIdDto } from "src/common/common.dto";


export class CustomerRequestDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'customer name', maxLength: 150 })
    @IsString()
    name: string;
}

export class CustomerDto extends IntersectionType(CommonDto, CustomerRequestDto) {}

export class UpdateCustomerDto extends IntersectionType(CommonIdDto, CustomerRequestDto) {}