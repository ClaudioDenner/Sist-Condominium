import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*' /*in production set whats domain can access this api */,
    allowedHeaders: 'Content-Type,Authorization',
  });
  await app.listen(3001);
}
bootstrap();
