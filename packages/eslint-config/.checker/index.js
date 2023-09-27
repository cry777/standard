const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const possibleProblems = require('../basic/possibleProblems')
const suggestions = require('../basic/suggestions')
const layoutAndFormatting = require('../basic/layoutAndFormatting')

const RULE_KEYS = {
  possibleProblems: [],
  suggestions: [],
  layoutAndFormatting: []
}

function fetchHtml() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://eslint.org/docs/latest/rules/', {
        headers: {
          'Content-type': 'text/html'
        }
      })
      .then(res => {
        if (res.status === 200) {
          resolve(res.data)
        }
        reject(new Error('请求失败'))
      })
      .catch(e => {
        reject(e)
      })
  })
}

function getRuleKeysFromDom(html) {
  return new Promise(resolve => {
    let $ = cheerio.load(html)
    $ = cheerio.load($('.docs-main__content').html())

    const possibleProblems = $('#possible-problems').nextUntil('#suggestions')
    possibleProblems.each(function (i, elem) {
      const text = $(this).find('.rule__name').text()
      if (text) {
        RULE_KEYS.possibleProblems.push(text)
      }
    })

    const suggestions = $('#suggestions').nextUntil('#layout--formatting')
    suggestions.each(function (i, elem) {
      const text = $(this).find('.rule__name').text()
      if (text) {
        RULE_KEYS.suggestions.push(text)
      }
    })
    const layoutAndFormatting = $('#layout--formatting').nextUntil('#deprecated')
    layoutAndFormatting.each(function (i, elem) {
      const text = $(this).find('.rule__name').text()
      if (text) {
        RULE_KEYS.layoutAndFormatting.push(text)
      }
    })

    fs.writeFileSync('.checker/ruleKeys.json', JSON.stringify(RULE_KEYS, null, '\t'))
    resolve()
  })
}

function print() {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  console.log('ESLint config is outdated!!!!')
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
}

function compare(remoteKeys, localKeys, keyType) {
  const filteredKeys = remoteKeys.filter(k => !localKeys.includes(k))
  const filteredKeys2 = localKeys.filter(k => !remoteKeys.includes(k))
  if (filteredKeys.length > 0) {
    console.log(keyType, ':', filteredKeys)
    console.log('remoteLength: ', remoteKeys.length)
    console.log('localLength: ', localKeys.length)
  }
  if (filteredKeys2.length > 0) {
    console.log(keyType, ':', filteredKeys2)
    console.log('remoteLength: ', remoteKeys.length)
    console.log('localLength: ', localKeys.length)
  }
  return remoteKeys.length === localKeys.length && filteredKeys.length === 0
}

function check() {
  const layoutAndFormattingKeys = Object.keys(layoutAndFormatting)
  const suggestionsKeys = Object.keys(suggestions)
  const possibleProblemsKeys = Object.keys(possibleProblems)

  const r1 = compare(RULE_KEYS.layoutAndFormatting, layoutAndFormattingKeys, 'layoutAndFormatting')
  const r2 = compare(RULE_KEYS.suggestions, suggestionsKeys, 'suggestions')
  const r3 = compare(RULE_KEYS.possibleProblems, possibleProblemsKeys, 'possibleProblems')

  if (r1 && r2 && r3) {
    console.log('Great!')
    console.log('ESLint config not change.')
  } else {
    print()
  }
}

fetchHtml()
  .then(getRuleKeysFromDom)
  .then(check)
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
