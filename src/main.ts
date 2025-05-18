import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import handleBootstrapError from './common/errors/handle-bootstrap-error';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT') ?? 3000;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
  console.log(`🚀 App is running on http://localhost:${PORT}`);
}
bootstrap().catch((error) => {
  handleBootstrapError(error);
});
