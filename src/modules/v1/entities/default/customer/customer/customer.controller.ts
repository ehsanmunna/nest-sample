import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonIdDto } from 'src/common/common.dto';
import { CustomerDto, CustomerRequestDto, UpdateCustomerDto } from './customer.dto';
import { CustomerService } from './customer.service';
@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }
    @Get()
    @ApiResponse({ type: CustomerDto })
    @UsePipes(ValidationPipe)
    async list() {
        return this.customerService.find();
    }
    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CustomerDto 
    })
    @UsePipes(ValidationPipe)
    async create(@Body() customer: CustomerRequestDto) {
        return this.customerService.save(customer);
    }

    @Get(':id')
    @ApiResponse({ type: CustomerDto })
    @UsePipes(ValidationPipe)
    async findById(@Param('id') id: string) {
        return this.customerService.findOne(id);
    }

    @Put(':id')
    @ApiResponse({
        type: UpdateCustomerDto,
        status: HttpStatus.OK,
        description: 'The record has been successfully updated.',
    })
    @UsePipes(ValidationPipe)
    update(@Param('id') id: string, @Body() updateUserDto: UpdateCustomerDto) {
        return this.customerService.update(id, updateUserDto);
    }
    
    @Delete('/:id')
    @ApiResponse({ type: CustomerDto })
    @UsePipes(ValidationPipe)
    async delete(@Query() params: CommonIdDto) {
        return this.customerService.delete(params.id);
    }
}
