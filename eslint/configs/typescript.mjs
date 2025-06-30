import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    // Temporarily disable due to incompatibility between ESLint v9.29.0 new options
    // and typescript-eslint@8.12.2. Re-enable when typescript-eslint supports
    // the new allowShortCircuit/allowTaggedTemplates options schema.
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.{ts,cts,mts,tsx}'],
    rules: {
      '@typescript-eslint/camelcase': 'off',
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
    ...tseslint.configs.disableTypeChecked,
  },
];
