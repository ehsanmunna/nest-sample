import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerEntity } from '../entities/default/customer/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerEntity])
  ],
  providers: [CustomerService],
  exports: [CustomerService],
  controllers: [CustomerController]
})
export class CustomerModule {}