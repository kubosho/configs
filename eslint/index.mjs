import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

import a11yConfig from './configs/a11y.mjs';
import baseConfig from './configs/base.mjs';
import importConfig from './configs/import.mjs';
import reactConfig from './configs/react.mjs';
import typescriptConfig from './configs/typescript.mjs';

export default defineConfig([
  {
    name: '@kubosho/configs',
    plugins: { js },
    extends: ['js/recommended', baseConfig, a11yConfig, importConfig, eslintConfigPrettier, reactConfig, typescriptConfig],
  },
]);
