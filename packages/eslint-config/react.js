const { ERROR, OFF } = require('./basic/constant');

module.exports = {
  extends: ['./basic', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
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
