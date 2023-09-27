const possibleProblemsRules = require('./basic/possibleProblems');
const suggestionsRules = require('./basic/suggestions');
const layoutAndFormattingRules = require('./basic/layoutAndFormatting');

module.exports = {
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
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
  },
  plugins: ['import', 'promise'],
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  rules: {
    ...possibleProblemsRules,
    ...suggestionsRules,
    ...layoutAndFormattingRules,

    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',

    /*
     * 'n/handle-callback-err': ['error', '^(err|error)$'],
     * 'n/no-callback-literal': 'error',
     * 'n/no-deprecated-api': 'error',
     * 'n/no-exports-assign': 'error',
     * 'n/no-new-require': 'error',
     * 'n/no-path-concat': 'error',
     * 'n/process-exit-as-throw': 'error',
     */

    'promise/param-names': 'error',
  },
};
