const { ESLint } = require('eslint');

const eslint = new ESLint();

eslint
  .calculateConfigForFile('./.eslintrc.js') //
  .then(console.log)
  .catch((error) => {
    console.log(error);
  });
