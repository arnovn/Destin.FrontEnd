import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    plugins: {
      prettier: pluginPrettier,
      import: pluginImport,
    },
    rules: {
      // Enable Prettier integration
      'prettier/prettier': 'warn',

      // Handle unused variables
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
      'linebreak-style': ['error', 'unix'],
      'no-var': 'error',
      'max-len': [
        'warn',
        { code: 150, ignoreUrls: true, ignoreTemplateLiterals: true },
      ],
      'import/newline-after-import': 'warn',
      'promise/always-return': 'off',
      'promise/catch-or-return': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
];
