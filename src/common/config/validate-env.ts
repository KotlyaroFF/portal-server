import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
});

export const validate = (config: Record<string, unknown>) => {
  const result = envSchema.safeParse(config);
  if (!result.success) {
    // eslint-disable-next-line no-console
    console.error('❌ Invalid environment variables:');
    // eslint-disable-next-line no-console
    console.error(result.error.format);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
  return result.data;
};
