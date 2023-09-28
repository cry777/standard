const axios = require('axios');
const cheerio = require('cheerio');
const possibleProblems = require('../rules/possibleProblems');
const suggestions = require('../rules/suggestions');
const layoutAndFormatting = require('../rules/layoutAndFormatting');

function failure() {
  console.log('------------------------ check default rules failure ------------------------');
  process.exit(1);
}

function fetchHtml() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://eslint.org/docs/latest/rules/', {
        headers: {
          'Content-type': 'text/html',
        },
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
          return;
        }
        failure();
        reject(new Error('请求失败'));
      })
      .catch((e) => {
        failure();
        reject(e);
      });
  });
}

function getRuleKeysFromHtml(html) {
  const remoteKeys = [];
  return new Promise((resolve) => {
    let $ = cheerio.load(html);
    $ = cheerio.load($('.docs-main__content').html());

    const possibleProblems = $('#possible-problems').nextUntil('#suggestions');
    possibleProblems.each(function (i, elem) {
      const text = $(this).find('.rule__name').text();
      if (text) {
        remoteKeys.push(text);
      }
    });

    const suggestions = $('#suggestions').nextUntil('#layout--formatting');
    suggestions.each(function (i, elem) {
      const text = $(this).find('.rule__name').text();
      if (text) {
        remoteKeys.push(text);
      }
    });
    const layoutAndFormatting = $('#layout--formatting').nextUntil('#deprecated');
    layoutAndFormatting.each(function (i, elem) {
      const text = $(this).find('.rule__name').text();
      if (text) {
        remoteKeys.push(text);
      }
    });

    resolve(remoteKeys);
  });
}

function check(remoteKeys) {
  return new Promise((resolve) => {
    const existedRules = [
      ...Object.keys(layoutAndFormatting), //
      ...Object.keys(suggestions),
      ...Object.keys(possibleProblems),
    ];
    const removedRules = existedRules.filter((r) => !remoteKeys.includes(r));
    const appendRules = remoteKeys.filter((r) => !existedRules.includes(r));
    if (removedRules.length > 0) {
      console.log('Remove rules: ', removedRules);
    }
    if (appendRules.length > 0) {
      console.log('Appended rules: ', appendRules);
    }
    console.log('------------------------ check default rules end ------------------------');
    resolve();
  });
}

module.exports = async function () {
  console.log('------------------------ check default rules before ------------------------');
  const html = await fetchHtml().catch(failure);
  const remoteKeys = await getRuleKeysFromHtml(html).catch(failure);
  await check(remoteKeys).catch(failure);
};
