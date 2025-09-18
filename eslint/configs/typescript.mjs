import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{ts,cts,mts,tsx}'],
    extends: [tseslint.configs.recommended, tseslint.configs.recommendedTypeChecked],
    // Temporarily disable due to incompatibility between ESLint v9.29.0 new options
    // and typescript-eslint@8.12.2. Re-enable when typescript-eslint supports
    // the new allowShortCircuit/allowTaggedTemplates options schema.
    rules: {
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],
    },
  },
  {
    files: ['**/*.{js,cjs,mjs,jsx}'],
    extends: [tseslint.configs.disableTypeChecked],
  },
]);
