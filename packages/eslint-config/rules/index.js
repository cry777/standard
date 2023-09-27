const possibleProblemsRules = require('./possibleProblems');
const suggestionsRules = require('./suggestions');
const layoutAndFormattingRules = require('./layoutAndFormatting');

module.exports = {
  rules: {
    ...possibleProblemsRules,
    ...suggestionsRules,
    ...layoutAndFormattingRules,
  },
};
