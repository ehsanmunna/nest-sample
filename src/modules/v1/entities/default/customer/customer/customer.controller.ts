import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomerRequestDto } from './customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }
    @Get()
    @UsePipes(ValidationPipe)
    async list() {
        return this.customerService.find();
    }
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() customer: CustomerRequestDto) {
        return this.customerService.save(customer);
    }
}
