import { Body, Controller, Post } from '@nestjs/common';
import { CustomerRequestDto } from './customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }
    @Post()
    async create(@Body() customer: any) {
        this.customerService.save(customer);
    }
}
