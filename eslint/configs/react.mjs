import react from "eslint-plugin-react";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    files: ["**/*.{jsx,tsx}"],

    languageOptions: {
      ...reactRecommended.languageOptions,
      ...reactJsxRuntime.languageOptions,
    },

    plugins: {
      react,
    },

    rules: {
      ...reactRecommended.rules,
      ...reactJsxRuntime.rules,
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
