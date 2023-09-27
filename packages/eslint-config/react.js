const { ERROR, OFF } = require('./basic/constant');

module.exports = {
  extends: [
    'plugin:react/recommended', //
    'plugin:react-hooks/recommended',
    './index',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'react/react-in-jsx-scope': OFF,
    'function-paren-newline': [ERROR, 'consistent'],
  },
};
