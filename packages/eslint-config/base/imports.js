/**
 * 定制 eslint-plugin-import 规则
 */
module.exports = {
  plugins: ['import'],
  rules: {
    'import/export': 'off',
    'import/no-deprecated': 'off',
    'import/no-empty-named-blocks': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unused-modules': 'off',
    'import/no-amd': 'off',
    'import/no-commonjs': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'off',
    'import/default': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-absolute-path': 'off',
    'import/no-cycle': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-internal-modules': 'off',
    'import/no-relative-packages': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'off',
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/consistent-type-specifier-style': 'off',
    'import/dynamic-import-chunkname': 'off',
    'import/exports-last': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/group-exports': 'off',
    'import/imports-first': 'off',
    'import/max-dependencies': 'off',
    'import/newline-after-import': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-default': 'off',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-unassigned-import': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
  },
};