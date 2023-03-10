import { ApiProperty } from '@nestjs/swagger';

export class MockQueryDto {
  @ApiProperty({
    description: 'input name for developer',
    type: String
  })
  name: string;
}