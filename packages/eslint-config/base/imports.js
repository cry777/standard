/**
 * 定制 eslint-plugin-import 规则
 */
module.exports = {
  extends: ['plugin:import/recommended'],
  rules: {
    'import/export': 'error', // 禁止任何无效导出，即同一名称的再次导出。
  },
};
