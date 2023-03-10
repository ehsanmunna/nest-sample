import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockModule } from './mock/mock.module';

const ENV = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    MockModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./env/${ENV}/.env`
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
