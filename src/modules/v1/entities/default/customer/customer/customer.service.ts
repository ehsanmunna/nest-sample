import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerRequestDto } from './customer.dto';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity) private readonly repository: Repository<CustomerEntity>
      ) {}

    public async save(_entity: CustomerRequestDto): Promise<CustomerEntity> {
        const newUser = this.repository.create(_entity);
        return this.repository.save(newUser);
    }

    public async find(_fields?): Promise<CustomerEntity[]> {
        return await this.repository.find(_fields);
    }

    public async findOne(_fields): Promise<CustomerEntity> {
        return await this.repository.findOne(_fields);
    }
}