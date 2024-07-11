import reactJsxRuntimeConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommendedConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  reactRecommendedConfig,
  reactJsxRuntimeConfig,

  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
