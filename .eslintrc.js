module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['regexp'],
  extends: ['standard', 'prettier', 'plugin:regexp/recommended'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'multiline-ternary': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
  },
};
