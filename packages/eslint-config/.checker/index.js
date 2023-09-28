const checkImportPluginRules = require('./check-import');
const checkDefaultRules = require('./check-default');

(async function () {
  await checkDefaultRules();
  await checkImportPluginRules();
})();
