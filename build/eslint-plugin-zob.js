'use strict'

const fs = require('fs')
const path = require('path')

const typesetContent = fs.readFileSync(path.join(__dirname, '..', 'src', 'typeset.js')).toString()

const match = typesetContent.match(/\/\/ <!--([\s\S]*?)\/\/ -->/g)

let text = ''

if (match) {
  match.forEach(item => {
    text += item.replace(/^\/\/ <!--/, '').replace(/\/\/ -->$/, '')
  })
}

text = text.replace(/^ *\/\/.*(\n|\r\n|$)/gm, '').replace(/ *\/\/.*$/gm, '')

const strictText = `'use strict'`
const isStrict = text.slice(0, 12) === strictText

if (!isStrict) {
  text = strictText + '\n' + text
}

fs.writeFile(path.join(__dirname, '..', 'packages', 'eslint-plugin-zob', 'lib', 'utils', 'typeset.js'), text, (err) => {
  if (err) throw err
  else console.log(`src/typeset.js -> lib/utils/typeset.js, done!`)
})
