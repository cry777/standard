/**
 * 定制 eslint-plugin-import 规则
 */
module.exports = {
  plugins: ['import'],
  rules: {
    'import/export': 'error', // 禁止任何无效导出，例如同一名称的再次导出
    'import/no-deprecated': 'off', // 禁止导入标有 @deprecated 文档标签的名称
    'import/no-empty-named-blocks': 'off', // --fix; 禁止空命名导入块
    'import/no-extraneous-dependencies': 'off', // 禁止使用无关的软件包
    'import/no-mutable-exports': 'error', // 禁止使用 var 或 let 来导出可变内容
    'import/no-named-as-default': 'error', // 禁止使用导出名称作为默认导出的标识符。
    'import/no-named-as-default-member': 'error', // 禁止使用导出名称作为默认导出的属性。
    'import/no-unused-modules': 'off',
    'import/no-amd': 'error', // disallow AMD require/define
    'import/no-commonjs': 'off',
    'import/no-import-module-exports': 'off', // --fix;
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'off',
    'import/default': 'off',
    'import/named': 'error', // 确保已命名的导入与远程文件中已命名的导出相对应。
    'import/namespace': 'off', // 确保导入的命名空间在取消引用时包含取消引用的属性。
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'off',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-relative-packages': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'off', // --fix
    'import/no-webpack-loader-syntax': 'off',
    'import/consistent-type-specifier-style': 'off',
    'import/dynamic-import-chunkname': 'off',
    'import/exports-last': 'off',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/imports-first': 'off',
    'import/max-dependencies': 'off',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-default': 'off',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-unassigned-import': 'off',
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/prefer-default-export': 'off',
  },
};
