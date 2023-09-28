// const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const existedRules = require('../base/imports');

function loadHtml(html) {
  const ruleNames = [];

  let $ = cheerio.load(html);
  const trs = $('tr');
  trs.each(function (i, elem) {
    const text = $(this).find('a').text();
    if (text) {
      ruleNames.push(text);
    }
  });
  return ruleNames;
}

function check(newRules) {
  const savedRules = Object.keys(existedRules.rules).map((k) => k.replace('import/', ''));
  const removedRules = savedRules.filter((r) => !newRules.includes(r));
  const appendRules = newRules.filter((r) => !savedRules.includes(r));
  if (removedRules.length > 0) {
    console.log('Remove rules: ', removedRules);
  }
  if (appendRules.length > 0) {
    console.log('Appended rules: ', appendRules);
  }
  console.log('------------------------ check import rules end ------------------------');
}

module.exports = function () {
  console.log('------------------------ check import rules before ------------------------');
  return axios
    .get('https://www.npmjs.com/package/eslint-plugin-import')
    .then((res) => {
      if (!res?.data) {
        console.log('------------------------ check import rules failure ------------------------');
        return;
      }
      const ruleNames = loadHtml(res.data);
      check(ruleNames);
      // const writeContent = {};
      // ruleNames.forEach((key) => {
      //   writeContent[`import/${key}`] = 'off';
      // });
      // fs.writeFileSync('importRuleKeys.json', JSON.stringify(writeContent, null, '\t'));
    })
    .catch(() => {
      console.log('------------------------ check import rules failure ------------------------');
    });
};
