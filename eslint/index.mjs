import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

import baseConfig from './configs/base.mjs';
import importConfig from './configs/import.mjs';
import reactConfig from './configs/react.mjs';
import typescriptConfig from './configs/typescript.mjs';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const compat = new FlatCompat({
  baseDirectory: _dirname,
});

export default [
  ...compat.extends('./configs/a11y'),

  js.configs.recommended,
  eslintConfigPrettier,
  ...baseConfig,
  ...importConfig,
  ...reactConfig,
  ...typescriptConfig,
];
