'use strict'

const fs = require('fs')
const path = require('path')

const ESLINT_WEBSITE_PATH = '../../../../repo/eslint-website'
const ESLINT_RULES_DOC_PATH = path.join(ESLINT_WEBSITE_PATH, 'docs/rules')

const docList = fs.readdirSync(ESLINT_RULES_DOC_PATH).filter(item => item.slice(-3) === '.md' && item[0] !== 'R')

const introduced = {}
const removed = {}

docList.forEach(item => {
  const content = fs.readFileSync(path.join(ESLINT_RULES_DOC_PATH, item), 'utf8').toString()

  const name = item.slice(0, -3)
  const version = content.match(/This rule was introduced in ESLint ?(.+)\./)[1]

  if (version.indexOf('removed') > -1) {
    removed[name] = version.match(/removed in (.+)/)[1]
    introduced[name] = version.match(/^(\S+)/)[1]
  } else {
    introduced[name] = version
  }

})

fs.writeFileSync('../js/version.json', JSON.stringify({
  introduced,
  removed
}, null, '  '), 'utf8')
