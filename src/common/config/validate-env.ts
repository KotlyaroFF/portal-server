// src/common/config/validate-env.ts
import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
});

export const validate = (config: z.input<typeof envSchema>) => {
  const result = envSchema.safeParse(config);
  console.log('CONFIG:', {
    mode: config.NODE_ENV,
    url: config.DATABASE_URL,
    port: config.PORT,
  });
  if (!result.success) {
    console.error('❌ Invalid environment variables:');
    console.error(result.error.format());
    process.exit(1);
  }
  return result.data;
};
