module.exports = {
  extends: [
    'plugin:vue/vue3-recommended', //
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
};
