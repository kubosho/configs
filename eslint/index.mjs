import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: _dirname,
});

export default [
  ...compat.extends(
    "prettier",
    "./chunk_configs/a11y",
    "./chunk_configs/import",
    "./chunk_configs/react",
    "./chunk_configs/typescript",
  ),
  {
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },

    plugins: {},

    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
