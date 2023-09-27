const { ERROR } = require('./basic/constant');

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended', //
    './index',
  ],
  settings: {},
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
  rules: {
    'function-paren-newline': [ERROR, 'consistent'],
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/prefer-import-from-vue': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/no-dupe-keys': 'off',

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',

    'vue/component-tags-order': [
      ERROR,
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/block-tag-newline': [
      ERROR,
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],
    'vue/component-name-in-template-casing': [ERROR, 'PascalCase'],
    'vue/component-options-name-casing': [ERROR, 'PascalCase'],
    'vue/custom-event-name-casing': [ERROR, 'camelCase'],
    'vue/define-macros-order': [
      ERROR,
      {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
      },
    ],
    'vue/html-comment-content-spacing': [
      ERROR,
      'always',
      {
        exceptions: ['-'],
      },
    ],
    'vue/no-restricted-v-bind': [ERROR, '/^v-/'],
    'vue/no-useless-v-bind': ERROR,
    'vue/no-unused-refs': ERROR,
    'vue/padding-line-between-blocks': [ERROR, 'always'],
    'vue/prefer-separate-static-class': ERROR,

    // extensions
    'vue/array-bracket-spacing': [ERROR, 'never'],
    'vue/arrow-spacing': [ERROR, { before: true, after: true }],
    'vue/block-spacing': [ERROR, 'always'],
    'vue/brace-style': [ERROR, 'stroustrup', { allowSingleLine: true }],
    'vue/comma-dangle': [ERROR, 'always-multiline'],
    'vue/comma-spacing': [ERROR, { before: false, after: true }],
    'vue/comma-style': [ERROR, 'last'],
    'vue/dot-location': [ERROR, 'property'],
    'vue/dot-notation': [ERROR, { allowKeywords: true }],
    'vue/eqeqeq': [ERROR, 'smart'],
    // 'vue/func-call-spacing': ['off', 'never'],
    'vue/key-spacing': [ERROR, { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': [ERROR, { before: true, after: true }],
    'vue/no-constant-condition': 'warn',
    'vue/no-empty-pattern': ERROR,
    'vue/no-extra-parens': [ERROR, 'functions'],
    'vue/no-irregular-whitespace': ERROR,
    'vue/no-loss-of-precision': ERROR,
    'vue/no-restricted-syntax': [ERROR, 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
    'vue/no-sparse-arrays': ERROR,
    'vue/object-curly-newline': [ERROR, { multiline: true, consistent: true }],
    'vue/object-curly-spacing': [ERROR, 'always'],
    'vue/object-property-newline': [ERROR, { allowMultiplePropertiesPerLine: true }],
    'vue/object-shorthand': [
      ERROR,
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/operator-linebreak': [ERROR, 'before'],
    'vue/prefer-template': ERROR,
    'vue/quote-props': [ERROR, 'consistent-as-needed'],
    'vue/space-in-parens': [ERROR, 'never'],
    'vue/space-infix-ops': ERROR,
    'vue/space-unary-ops': [ERROR, { words: true, nonwords: false }],
    'vue/template-curly-spacing': ERROR,
  },
};
