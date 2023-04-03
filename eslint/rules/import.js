"use strict";

module.exports = {
  plugins: ["import"],
  extends: ["plugin:import/errors", "plugin:import/warnings"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
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
    "import/no-extraneous-dependencies": "error",
  },
};
