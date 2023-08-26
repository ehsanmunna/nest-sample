import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockModule } from './mock/mock.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/v1/person';
import { PersonEntity } from './modules/v1/entities/default/person/person.entity';

const ENV = process.env.NODE_ENV || 'development';
@Module({
  imports: [
    MockModule,
    PersonModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: 'default',
      useFactory: (configService: ConfigService) => ({
          autoLoadEntities: true,
          keepConnectionAlive: true,
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [PersonEntity],
          migrationsRun: false
      })
  }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./env/${ENV}/.env`
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
