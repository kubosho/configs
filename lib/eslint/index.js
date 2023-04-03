"use strict";

module.exports = {
  root: true,
  env: { browser: true, node: true, es6: true, jest: true },
  extends: [
    "eslint:recommended",
    "prettier",
    "./rules/import",
    "./rules/react",
    "./rules/a11y",
  ],
  rules: {},
};
