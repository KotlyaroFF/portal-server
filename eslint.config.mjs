import { createRequire } from 'node:module';
const baseConfig = createRequire(import.meta.url)('portal-configs/eslint');
const config = baseConfig.default || baseConfig;

export default [
  ...config,
  {
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
