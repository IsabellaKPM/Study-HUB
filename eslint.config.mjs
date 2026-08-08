import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "src-tauri/**",
      "eslint.config.mjs",
      "commitlint.config.ts"
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  prettierConfig,

  {
    plugins: {
      prettier: prettierPlugin,
      "unused-imports": unusedImports,
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      quotes: ["error", "double"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "all",
          endOfLine: "auto",
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];
