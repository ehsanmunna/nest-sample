import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerRequestDto } from './customer.dto';
import { CustomerEntity } from './customer.entity';
import { CommonIdDto } from 'src/common/common.dto';

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

    public async findOne(id: string): Promise<CustomerEntity> {
        return await this.repository.findOneBy({id});
    }

    public async update(params: CommonIdDto, _entity: any): Promise<any> {
        return await this.repository.update(params.id, _entity);
    }

    public async delete(id: string): Promise<any> {
        return await this.repository.delete(id);
    }
}