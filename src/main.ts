
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { configDotenv } from 'dotenv';
configDotenv()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true,
    })
  );
  await app.listen(process.env.PORT);
}
bootstrap();
