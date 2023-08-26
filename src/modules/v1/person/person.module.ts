import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { PersonEntity } from '../entities/default/person/person.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonEntity])
  ],
  providers: [PersonService],
  exports: [PersonService],
  controllers: [PersonController]
})
export class PersonModule {}