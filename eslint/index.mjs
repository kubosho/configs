import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

import reactConfig from "./configs/react.mjs";
import typescriptConfig from "./configs/typescript.mjs";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: _dirname,
});

export default [
  eslintConfigPrettier,
  js.configs.recommended,
  ...reactConfig,
  ...typescriptConfig,

  ...compat.extends("./configs/a11y", "./configs/import"),
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts}"],

    ignores: ["**/node_modules/"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
];
