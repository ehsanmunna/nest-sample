import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonRequestDto } from './person.dto';
import { PersonEntity } from '../entities/default/person/person.entity';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonEntity) private readonly repository: Repository<PersonEntity>
      ) {}

    public async save(_entity: PersonRequestDto): Promise<PersonEntity> {
        const newUser = this.repository.create(_entity);
        return this.repository.save(newUser);
    }

    public async find(_fields?): Promise<PersonEntity[]> {
        return await this.repository.find(_fields);
    }

    public async findOne(id: string): Promise<PersonEntity> {
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