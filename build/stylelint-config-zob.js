'use strict'

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

function loadYML(ymlFilePath) {
  return yaml.safeLoad(fs.readFileSync(ymlFilePath, 'utf8'));
}

const template = `'use strict'

module.exports = ...
`

function genContent(text) {
  return template.replace('...', JSON.stringify(text, null, '  ').replace(/^(\s+)"([^"+\/|@-]+)":/mg, (a, b, c) => {
    return b + c + ':'
  }).replace(/"/g, '\''))
}

function genConfig(src, dest) {
  const content = loadYML(path.join(__dirname, '..', 'rules', 'css', src))
  fs.writeFile(path.join(__dirname, '..', 'packages', 'stylelint-config-zob', dest), genContent(content), (err) => {
    if (err) throw err
    else console.log(`${src} -> ${dest}, done!`)
  })
}

genConfig('.stylelintrc.yml', 'index.js')
genConfig('order.yml', 'order.js')
