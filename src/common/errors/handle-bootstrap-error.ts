import { Logger } from '@nestjs/common';

const logger = new Logger('Bootstrap');

export default function handleBootstrapError(error: unknown): never {
  logger.error(
    'Ошибка при запуске приложения',
    error instanceof Error ? error.stack : String(error),
  );
  // eslint-disable-next-line no-process-exit
  process.exit(1);
}
