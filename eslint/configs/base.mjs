import globals from "globals";

export default [
  {
    files: ["**/*.{js,cjs,mjs}"],
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
