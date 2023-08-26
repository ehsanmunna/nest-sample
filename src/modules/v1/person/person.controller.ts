import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonIdDto } from 'src/common/common.dto';
import { PersonDto, PersonRequestDto, UpdatePersonDto } from './person.dto';
import { PersonService } from './person.service';
@ApiTags('Person')
@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) { }
    @Get()
    @ApiResponse({ type: PersonDto })
    @UsePipes(ValidationPipe)
    async list() {
        return this.personService.find();
    }
    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: PersonDto 
    })
    @UsePipes(ValidationPipe)
    async create(@Body() person: PersonRequestDto) {
        return this.personService.save(person);
    }

    @Get(':id')
    @ApiResponse({ type: PersonDto })
    @UsePipes(ValidationPipe)
    async findById(@Param('id') id: string) {
        return this.personService.findOne(id);
    }

    @Put(':id')
    @ApiResponse({
        type: UpdatePersonDto,
        status: HttpStatus.OK,
        description: 'The record has been successfully updated.',
    })
    @UsePipes(ValidationPipe)
    update(@Param('id') id: string, @Body() updateUserDto: UpdatePersonDto) {
        return this.personService.update(id, updateUserDto);
    }
    
    @Delete('/:id')
    @ApiResponse({ type: PersonDto })
    @UsePipes(ValidationPipe)
    async delete(@Query() params: CommonIdDto) {
        return this.personService.delete(params.id);
    }
}
