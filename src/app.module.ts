import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './common/config/validate-env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // чтобы не импортировать в каждый модуль вручную
      envFilePath: (() => {
        switch (process.env.NODE_ENV) {
          case 'production':
            return '.env.production';
          case 'development':
            return '.env.development';
          default:
            return '.env.development'; // fallback по умолчанию, если NODE_ENV не указан
        }
      })(),
      validate,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
