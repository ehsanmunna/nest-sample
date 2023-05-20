import { Injectable, NotFoundException } from '@nestjs/common';
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

    public async findOne(id: string): Promise<CustomerEntity> {
        return await this.repository.findOneBy({id});
    }

    public async update(id: string, _entity: any): Promise<any> {
        try {
            await this.repository.update(id, _entity);
            return 'Successfully updated';
        } catch (error) {
            return new Error(error);
        }
    }

    public async delete(id: string): Promise<any> {
        const isExist = await this.findOne(id);
        if (!isExist) {
            return new NotFoundException();
        }
        try {
            await this.repository.delete(id);
            return 'Successfully deleted';
        } catch (error) {
            return new Error(error);
        }
    }
}