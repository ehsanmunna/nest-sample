import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

const ENV = process.env.NODE_ENV || 'development'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  const config = new DocumentBuilder()
  .setTitle('Nest API Sample')
  .setDescription('A complete api sample using nest')
  .setVersion('1.0')
  // .addTag('Prods')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(port);
  console.log(`server running on http://localhost:${port}`)
}
bootstrap();
