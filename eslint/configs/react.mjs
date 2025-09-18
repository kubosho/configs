import reactPlugin from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
    extends: [reactPlugin.configs.flat.recommended, reactPlugin.configs.flat['jsx-runtime']],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
