module.exports = {
  root: true,
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
  plugins: [
    'unicorn', //
    'promise',
    'import',
  ],
  extends: [
    '../rules/index.js', //
    './imports.js',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:node/recommended',
  ],
  // 忽略的文件
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'dist',
    'node_modules',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    // force include
    '!.github',
    '!.vitepress',
    '!.vscode',
    // force exclude
    '.vitepress/cache',
  ],
  rules: {
    'unicorn/prefer-top-level-await': 'off',
  },
};
