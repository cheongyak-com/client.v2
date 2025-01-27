import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next/typescript'),
  ...compat.extends('prettier'),
  ...compat.plugins('react', 'prettier', 'react-hooks', 'import'),
  {
    "rules": {
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": 0,
      "react/prop-types": 0,
      "no-case-declarations": 1,
      "react/jsx-key": 1,
      "react/no-children-prop": 2,
      "react/no-string-refs": 1,
      "react/no-unescaped-entities": 1,
      "react/no-deprecated": 1,
      "react/no-unused-state": 1,
      "prefer-const": 1,
      "no-class-assign": 1,
      "no-constant-condition": 1,
      "no-prototype-builtins": 1,
      "no-extra-boolean-cast": 1,
      "no-unexpected-multiline": 1,
      "no-extra-semi": 1,
      "no-undef": 2,
      "no-var": 1,
      "no-duplicate-imports": 1,
      "react/display-name": 1,
      "no-mixed-spaces-and-tabs": 1,
      "no-useless-escape": 1,
      "react/no-direct-mutation-state": 1,
      "no-dupe-keys": 1,
      "no-unused-vars": 0,
      "import/order": [
        "warn",
        {
          "newlines-between": "never",
          "groups": ["external", "builtin", "internal", "parent", "index", "sibling", "type", "object"],
          "pathGroups": [
            {
              "pattern": "react",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "next",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "~/**",
              "group": "parent",
              "position": "before"
            }
          ],
          "pathGroupsExcludedImportTypes": ["react", "**/mocks/schema"],
          "warnOnUnassignedImports": true
        }
      ]
    },
  }
];

export default configs;
