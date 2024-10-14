import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'import/newline-after-import': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.{config,factory,spec,test,workspace}.{cjs,js,mjs,jsx,cts,mts,ts,tsx}'],
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      'import/ignore': ['node_modules'],
    },
  },
];
