import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

import reactConfig from "./configs/react.mjs";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: _dirname,
});

export default [
  eslintConfigPrettier,

  ...compat.extends(
    "./configs/a11y",
    "./configs/import",
    "./configs/typescript",
  ),
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts}", ...reactConfig.files],

    ignores: ["**/node_modules/"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      ...reactConfig.languageOptions,
    },

    plugins: {
      ...reactConfig.plugins,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...reactConfig.rules,
    },

    settings: {
      ...reactConfig.settings,
    },
  },
];
