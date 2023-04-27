/* eslint-disable @typescript-eslint/no-var-requires */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const dotenv = require('dotenv');
  dotenv.config();

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
};
bootstrap();
