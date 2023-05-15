import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CommonIdDto {
    @ApiProperty()
    id: string;
}

export class CommonDto extends CommonIdDto{
    @ApiPropertyOptional()
    created_at: Date;

    @ApiPropertyOptional()
    updated_at: Date;
}
