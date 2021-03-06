module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'no-unused-expressions': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-param-reassign': 'off',
    'no-console': 0,
    'object-shorthand': [0],
    'no-nested-ternary': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-array-index-key': 0,
    'import/no-named-as-default-member': 0,
  },
};
