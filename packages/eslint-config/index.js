const baseRules = require('./rules/index');

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  plugins: ['unicorn', 'promise'],
  extends: ['./baseRules', 'plugin:unicorn/recommended', 'plugin:promise/recommended'],
};
