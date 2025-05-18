import parser from '@typescript-eslint/parser';
import { createRequire } from 'node:module';
const baseConfig = createRequire(import.meta.url)('portal-configs/eslint');
const config = baseConfig.default || baseConfig;

export default [
  ...config,
  {
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'no-process-exit': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
            arguments: true,
            variables: true,
            properties: true,
          },
        },
      ],
    },
  },
];
