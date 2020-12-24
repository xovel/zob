'use strict'

const unicodeList = [
  '\\u1100-\\u11FF',
  '\\u2E80-\\u2EFF',
  '\\u2F00-\\u2FDF',
  '\\u2FF0-\\u2FFF',
  '\\u3000-\\u303F',
  '\\u3040-\\u309F',
  '\\u30A0-\\u30FF',
  '\\u3100-\\u312F',
  '\\u3130-\\u318F',
  '\\u3190-\\u319F',
  '\\u31A0-\\u31BF',
  '\\u31C0-\\u31EF',
  '\\u31F0-\\u31FF',
  '\\u3200-\\u32FF',
  '\\u3300-\\u33FF',
  '\\u3400-\\u4DBF',
  '\\u4DC0-\\u4DFF',
  '\\u4E00-\\u9FFF',
  '\\uAC00-\\uD7AF',
  '\\uF900-\\uFAFF',
  '\\uFE30-\\uFE4F',
  '\\uFF00-\\uFFEF'
]

const punctuation = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g

const cjk = `[${unicodeList.join('')}]`

function regex(input) {
  let source = input.source || input
  const flags = input.flags || ''
  source = source.replace(/cjk/g, cjk).replace(/punctuation/g, punctuation)
  return new RegExp(source, flags)
}

const fixer = {
  cjk: cjk,
  punctuation: /(cjk) *([~!;,?]+) */g,
  punctuationSpecial: /(cjk) *([:.]) *(cjk)/g,
  quote: /(cjk)(['"])(.*?)(\2)/g,
  colon: /(cjk): *([A-Za-z0-9()])/g,
  colonQuote: /(cjk) *[:：] *(['"])(.*?)(\2)/g,
  dot: /([.]{2,}|\u2026)(cjk)/g,
  hash: /(cjk)#(cjk+)#(cjk)/g,
  operator: /(cjk)([-+*=/\\|<>&])([A-Za-z0-9])/g,
  operatorAhead: /([A-Za-z0-9])([-+*=/\\|<>&])(cjk)/g,
  bracket: /(cjk)([()[\]{}])(cjk)/g,
  middleDot: /(cjk) *([\u00b7\u2022\u2027]) *(cjk)/g,
  percent: /(%)([A-Za-z])/g,
  alphabet: /(cjk)([A-Za-z])/g,
  alphabetAhead: /([A-Za-z])(cjk)/g,
  number: /(cjk)([0-9])/g,
  numberAhead: /([0-9])(cjk)/g,
  symbol: /(cjk)(punctuation)/g,
  symbolAhead: /(punctuation)(cjk)/g
}

Object.keys(fixer).forEach(key => {
  fixer[key] = regex(fixer[key])
})

const fullWidthCharMap = {
  '~': '～',
  '!': '！',
  ';': '；',
  ':': '：',
  ',': '，',
  '.': '。',
  '?': '？',
  '(': '（',
  ')': '）',
  '[': '【',
  ']': '】',
  '{': '｛',
  '}': '｝',
  '<': '《',
  '>': '》'
}

const reSinleWidthChar = /[~!;:,.?]/g

function replaceFullWidthChar(text) {
  return text.replace(reSinleWidthChar, char => fullWidthCharMap[char])
}

function typeset(text, options = {}) {

  if (!text || !fixer.cjk.test(text)) {
    return text
  }

  let result = text

  result = result.replace(fixer.punctuation, (_, cjk, punctuation) => cjk + replaceFullWidthChar(punctuation))

  result = result.replace(fixer.punctuationSpecial, (_, cjkLeft, punctuation, cjkRight) => cjkLeft + fullWidthCharMap[punctuation] + cjkRight)

  result = result.replace(fixer.quote, (_, cjk, quoteLeft, content) => {
    if (quoteLeft === '"') {
      return cjk + (options.doubleQuote || '“') + content + (options.doubleQuoteClose || '”')
    }
    return cjk + (options.singleQuote || '‘') + content + (options.singleQuoteClose || '’')
  })

  result = result.replace(fixer.colon, (_, cjk, char) => cjk + '：' + char)

  result = result.replace(fixer.colonQuote, (_, cjk, quoteLeft, content) => {
    if (quoteLeft === '"') {
      return cjk + '：' + (options.doubleQuote || '“') + content + (options.doubleQuoteClose || '”')
    }
    return cjk + '：' + (options.singleQuote || '‘') + content + (options.singleQuoteClose || '’')
  })

  result = result.replace(fixer.dot, (_, dot, cjk) => dot + ' ' + cjk)

  result = result.replace(fixer.hash, (_, cjkLeft, cjkContent, cjkRight) => cjkLeft + ' #' + cjkContent + '# ' + cjkRight)

  result = result.replace(fixer.operator, (_, cjk, operator, char) => cjk + ' ' + operator + ' ' + char)

  result = result.replace(fixer.operatorAhead, (_, char, operator, cjk) => char + ' ' + operator + ' ' + cjk)

  result = result.replace(fixer.bracket, (_, cjkLeft, bracket, cjkRight) => cjkLeft + fullWidthCharMap[bracket] + cjkRight)

  result = result.replace(fixer.middleDot, (_, cjkLeft, middleDot, cjkRight) => cjkLeft + '・' + cjkRight)

  result = result.replace(fixer.percent, (_, percent, char) => percent + ' ' + char)

  result = result.replace(fixer.alphabet, (_, cjk, alphabet) => cjk + ' ' + alphabet)
  result = result.replace(fixer.alphabetAhead, (_, alphabet, cjk) => alphabet + ' ' + cjk)

  result = result.replace(fixer.number, (_, cjk, number) => cjk + ' ' + number)
  result = result.replace(fixer.numberAhead, (_, number, cjk) => number + ' ' + cjk)

  result = result.replace(fixer.symbol, (_, cjk, symbol) => cjk + ' ' + symbol)
  result = result.replace(fixer.symbolAhead, (_, symbol, cjk) => symbol + ' ' + cjk)

  return result
}

module.exports = typeset
