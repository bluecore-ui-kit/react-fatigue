module.exports = {
  parser: "babel-eslint",

  env: {
    browser: true,
    jest: true
  },

  plugins: [
    'react'
  ],

  extends: [
    'standard-jsx',
    'eslint:recommended',
    'plugin:react/recommended'
  ],

  rules: {
    semi: ['error', 'always'],
    strict: ['error', 'global'],
    'max-len': ['error', {code: 80, tabWidth: 2}],
    indent: ['error', 2],
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],
    'max-depth': ['error', 4],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 4],
    'max-statements': ['error', 10],
    'complexity': ['error', {max: 12}],
    'jsx-quotes': ['error', 'prefer-double']
  }
};
