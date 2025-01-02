import pkg from "globals";
const { browser, vitest } = pkg;
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^(React|Link|Header|Router|Routes|Route|StrictMode|App|ProductListPage|ProductDetailsPage|ProductItem|ProductDetails|SearchBar|ProductList)$",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    files: ["**/*.test.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...browser,
        ...vitest,
      },
    },
  },
];
