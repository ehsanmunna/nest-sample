import { ApiProperty, IntersectionType } from "@nestjs/swagger";
import { IsNotEmpty, IsString, isString } from "class-validator";
import { CommonDto, CommonIdDto } from "src/common/common.dto";


export class PersonRequestDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'person name', maxLength: 150 })
    @IsString()
    name: string;
}

export class PersonDto extends IntersectionType(CommonDto, PersonRequestDto) {}

export class UpdatePersonDto extends IntersectionType(CommonIdDto, PersonRequestDto) {}