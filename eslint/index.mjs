import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

import react from "./configs/react.mjs";

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
    files: ["**/*.{js,cjs,mjs,ts,cts,mts}", ...react.files],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      ...react.languageOptions,
    },

    plugins: {
      ...react.plugins,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...react.rules,
    },

    settings: {
      ...react.settings,
    },
  },
];
