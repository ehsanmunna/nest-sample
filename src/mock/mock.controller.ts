import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MockQueryDto } from './mock.dto';
import { MockService } from './mock.service';

@ApiTags('Mock')
@Controller('mock')
export class MockController {
    constructor(
        private service: MockService
    ) { }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Say hello',
        type: String
    })
    sayHello(): string {
        return this.service.sayHello();
    }

    @Get('/:name')
    @ApiResponse({
        status: 200,
        description: 'Say hello to developer',
        type: String
    })
    sayHelloTo(@Param() params: MockQueryDto): MockQueryDto | string {
        return this.service.sayHelloTo(params.name);
    }
}
