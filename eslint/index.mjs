import { defineConfig } from 'eslint/config';

import a11yConfig from './configs/a11y.mjs';
import baseConfig from './configs/base.mjs';
import reactConfig from './configs/react.mjs';
import typescriptConfig from './configs/typescript.mjs';

export default defineConfig([
  {
    name: '@kubosho/configs',
    extends: [baseConfig, a11yConfig, reactConfig, typescriptConfig],
  },
]);
