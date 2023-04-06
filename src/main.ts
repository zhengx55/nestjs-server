import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  await app.listen(3000);
  app.use(helmet());
  app.use(
    rateLimit({
      max: 100,
      windowMs: 15 * 60 * 1000,
    }),
  );
  logger.log('listening on http://localhost:3000');
}
bootstrap();
