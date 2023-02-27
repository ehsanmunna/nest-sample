import { Controller, Get } from '@nestjs/common';
import { MockService } from './mock.service';

@Controller('mock')
export class MockController {
    constructor(
        private service: MockService
    ) { }

    @Get()
    findAll(): string {
        return this.service.getPeople();
    }
}
