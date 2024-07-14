"use strict";

module.exports = {
  plugins: ["import"],
  extends: ["plugin:import/errors", "plugin:import/warnings"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".cjs", ".mjs", ".jsx"],
      },
      typescript: {
        alwaysTryTypes: true,
        extensions: [".ts", ".tsx", ".d.ts"],
      },
    },
    "import/ignore": ["node_modules"],
  },
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/newline-after-import": "error",
    "import/no-unresolved": [
      "error",
      {
        caseSensitive: true,
        commonjs: true,
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.{test,spec}.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
      },
    ],
  },
};
